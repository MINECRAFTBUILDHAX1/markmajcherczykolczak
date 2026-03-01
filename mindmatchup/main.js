// Game State
let currentQuestion = 0;
let score = 0;
let questions = [];
let timeLeft = 0;
let timer = null;
let currentGameType = '';
let currentDifficulty = '';
let playerNickname = localStorage.getItem('playerNickname') || '';
let currentCustomQuiz = null;

// Modal Management
const modals = {
    privacy: document.getElementById('privacyModal'),
    terms: document.getElementById('termsModal'),
    contact: document.getElementById('contactModal'),
    game: document.getElementById('gameModal'),
    dailyChallenge: document.getElementById('dailyChallengeModal'),
    customQuiz: document.getElementById('customQuizModal')
};



// Sound effects
const sounds = {
    correct: new Audio('https://assets.mixkit.co/active_storage/sfx/2013/2013-preview.mp3'),
    incorrect: new Audio('https://assets.mixkit.co/active_storage/sfx/2014/2014-preview.mp3'),
    click: new Audio('https://assets.mixkit.co/active_storage/sfx/2015/2015-preview.mp3')
};

// Initialize when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    setupMobileNavigation();
    showGameSelection();
    updateDailyChallengeStatus();
    updateScoreDisplay();
    loadSharedQuiz();

    // Set up modal triggers
    document.getElementById('privacyBtn').addEventListener('click', () => showModal('privacy'));
    document.getElementById('termsBtn').addEventListener('click', () => showModal('terms'));
    document.getElementById('contactBtn').addEventListener('click', () => showModal('contact'));
    document.getElementById('dailyChallengeBtn').addEventListener('click', () => showModal('dailyChallenge'));
    document.getElementById('customQuizBtn').addEventListener('click', () => showModal('customQuiz'));

    // Set up close buttons
    document.querySelectorAll('.close').forEach(closeBtn => {
        closeBtn.addEventListener('click', () => {
            Object.values(modals).forEach(modal => {
                modal.classList.remove('show');
            });
        });
    });

    // Set up game card click handlers
    document.querySelectorAll('.game-card').forEach(card => {
        card.querySelector('.play-btn').addEventListener('click', () => {
            const gameType = card.dataset.game;
            currentGameType = gameType;
            const gameTitle = document.getElementById('gameTitle');
            gameTitle.textContent = `${gameType.charAt(0).toUpperCase() + gameType.slice(1)} Quiz`;
            showDifficultySelection(gameType);
        });
    });

    // Close modals when clicking outside
    window.addEventListener('click', (e) => {
        Object.values(modals).forEach(modal => {
            if (e.target === modal) {
                modal.classList.remove('show');
            }
        });
    });
});

// Mobile navigation
function setupMobileNavigation() {
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenu) {
        mobileMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
}

// Show difficulty selection
function showDifficultySelection(gameType) {
    currentGameType = gameType;
    const gameContent = document.getElementById('gameContent');
    gameContent.innerHTML = `
        <div class="difficulty-selection">
            <h3>Select Difficulty</h3>
            <div class="difficulty-buttons">
                <button class="difficulty-btn" onclick="startQuiz('${gameType}', 'easy')">Easy</button>
                <button class="difficulty-btn" onclick="startQuiz('${gameType}', 'medium')">Medium</button>
                <button class="difficulty-btn" onclick="startQuiz('${gameType}', 'hard')">Hard</button>
            </div>
        </div>
    `;
    showModal('game');
}

// Show modal function
function showModal(modalName) {
    Object.values(modals).forEach(modal => {
        modal.classList.remove('show');
    });
    modals[modalName].classList.add('show');
}

// Start Quiz Function
function startQuiz(gameType, difficulty) {
    showModal('game');
    currentGameType = gameType;
    currentDifficulty = difficulty;
    
    // Reset game state
    currentQuestion = 0;
    score = 0;
    
    // Check if it's a custom quiz
    if (gameType === 'custom') {
        questions = currentCustomQuiz.questions;
    } else {
        // For regular quizzes, get questions from the database
        if (quizDatabase && quizDatabase[gameType] && quizDatabase[gameType][difficulty]) {
            questions = quizDatabase[gameType][difficulty].questions;
        } else {
            console.error('Quiz database not properly loaded');
            alert('Error loading quiz. Please try again.');
            return;
        }
    }
    
    const gameTitle = document.getElementById('gameTitle');
    gameTitle.textContent = `${gameType.charAt(0).toUpperCase() + gameType.slice(1)} Quiz - ${difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}`;
    
    displayQuestion();
}

// Display Question Function
function displayQuestion() {
    const gameContent = document.getElementById('gameContent');
    const question = questions[currentQuestion];
    
    gameContent.innerHTML = `
        <div class="question-container">
            <h3>Question ${currentQuestion + 1} of ${questions.length}</h3>
            <p>${question.question}</p>
            <div class="options-container">
                ${question.options.map((option, index) => `
                    <button class="option-btn" onclick="checkAnswer(${index})">${option}</button>
                `).join('')}
            </div>
        </div>
    `;
}

// Check Answer Function
function checkAnswer(selectedIndex) {
    const question = questions[currentQuestion];
    const buttons = document.querySelectorAll('.option-btn');
    
    buttons.forEach(button => button.disabled = true);
    
    if (selectedIndex === question.correct) {
        buttons[selectedIndex].classList.add('correct');
        // Handle points based on game type
        if (currentGameType === 'daily') {
            score += 15; // Fixed points for daily challenge
        } else if (currentGameType === 'custom') {
            score += 10; // Default points for custom quizzes
        } else {
            score += quizDatabase[currentGameType][currentDifficulty].points;
        }
        playSound('correct');
    } else {
        buttons[selectedIndex].classList.add('incorrect');
        buttons[question.correct].classList.add('correct');
        playSound('incorrect');
    }
    
    // Force progression after 1 second
    setTimeout(() => {
        currentQuestion++;
        if (currentQuestion < questions.length) {
            displayQuestion();
        } else {
            if (currentGameType === 'daily') {
                localStorage.setItem('lastDailyChallenge', new Date().toDateString());
                updateDailyChallengeStatus();
            }
            endGame();
        }
    }, 1000);
}

// End Game Function
function endGame() {
    const timerDisplay = document.getElementById('timerDisplay');
    if (timerDisplay) {
        timerDisplay.classList.remove('active');
    }
    
    const gameContent = document.getElementById('gameContent');
    const totalScore = parseInt(localStorage.getItem('totalScore') || '0') + score;
    localStorage.setItem('totalScore', totalScore);
    updateScoreDisplay();
    
    gameContent.innerHTML = `
        <div class="question-container">
            <h3>Game Over!</h3>
            <p>Your final score: ${score}</p>
            <button onclick="returnToHome()" class="play-btn">Return Home</button>
        </div>
    `;
}

// Add new function to handle returning to home
function returnToHome() {
    // Close all modals
    Object.values(modals).forEach(modal => {
        modal.classList.remove('show');
    });
    
    // Show the game selection screen
    showGameSelection();
}

// Reset Game Function
function resetGame() {
    showGameSelection();
}

// Play sound function
function playSound(soundName) {
    if (sounds[soundName]) {
        sounds[soundName].currentTime = 0;
        sounds[soundName].play().catch(error => console.log('Sound play failed:', error));
    }
}

// Update score display in header
function updateScoreDisplay() {
    const totalScore = localStorage.getItem('totalScore') || 0;
    const scoreDisplay = document.getElementById('scoreDisplay');
    if (scoreDisplay) {
        scoreDisplay.textContent = `Score: ${totalScore}`;
    }
}

// Daily Challenge Functions
function updateDailyChallengeStatus() {
    const today = new Date().toDateString();
    const lastCompleted = localStorage.getItem('lastDailyChallenge');
    const dailyChallengeBtn = document.getElementById('dailyChallengeBtn');
    const countdownDisplay = document.getElementById('dailyChallengeCountdown');
    
    if (lastCompleted === today) {
        dailyChallengeBtn.disabled = true;
        dailyChallengeBtn.textContent = 'Daily Challenge Completed';
        if (countdownDisplay) {
            countdownDisplay.style.display = 'block';
            startCountdown();
        }
    } else {
        dailyChallengeBtn.disabled = false;
        dailyChallengeBtn.textContent = 'Daily Challenge';
        if (countdownDisplay) {
            countdownDisplay.style.display = 'none';
        }
    }
}

function startCountdown() {
    const countdownDisplay = document.getElementById('dailyChallengeCountdown');
    if (!countdownDisplay) return;

    countdownDisplay.style.display = 'block';
    
    function updateCountdown() {
        const now = new Date();
        const tomorrow = new Date(now);
        tomorrow.setDate(tomorrow.getDate() + 1);
        tomorrow.setHours(0, 0, 0, 0);
        
        const timeLeft = tomorrow - now;
        const hours = Math.floor(timeLeft / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        
        countdownDisplay.textContent = `Next Challenge in: ${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        
        if (timeLeft <= 0) {
            updateDailyChallengeStatus();
        }
    }
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

function startDailyChallenge() {
    const today = new Date().toDateString();
    const lastCompleted = localStorage.getItem('lastDailyChallenge');
    
    if (lastCompleted === today) {
        alert('You have already completed today\'s challenge!');
        return;
    }

    // Generate daily questions based on date
    questions = generateDailyQuestions();
    currentQuestion = 0;
    score = 0;
    timeLeft = 60; // 1 minute in seconds
    currentGameType = 'daily';
    
    const gameTitle = document.getElementById('gameTitle');
    gameTitle.textContent = 'Daily Challenge';
    showModal('game');
    startTimer();
    displayQuestion();
}

function generateDailyQuestions() {
    const today = new Date();
    const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
    
    // Use the seed to generate consistent questions for the day
    const dailyQuestions = [];
    const categories = ['general', 'maths', 'science', 'history'];
    
    // Get 2 questions from each category
    categories.forEach(category => {
        const categoryQuestions = quizDatabase[category].medium.questions;
        const questionIndex1 = (seed + category.charCodeAt(0)) % categoryQuestions.length;
        const questionIndex2 = (seed + category.charCodeAt(0) + 1) % categoryQuestions.length;
        dailyQuestions.push(categoryQuestions[questionIndex1]);
        dailyQuestions.push(categoryQuestions[questionIndex2]);
    });
    
    return dailyQuestions;
}

function startTimer() {
    const timerDisplay = document.getElementById('timerDisplay');
    if (timer) clearInterval(timer);
    
    // Only show timer for Daily Challenge
    if (currentGameType === 'daily') {
        timerDisplay.classList.add('active');
    }
    
    timer = setInterval(() => {
        timeLeft--;
        if (timerDisplay) {
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            timerDisplay.textContent = `Time Left: ${minutes}:${seconds.toString().padStart(2, '0')}`;
        }
        
        if (timeLeft <= 0) {
            clearInterval(timer);
            if (currentGameType === 'daily') {
                localStorage.setItem('lastDailyChallenge', new Date().toDateString());
                updateDailyChallengeStatus();
            }
            endGame();
        }
    }, 1000);
}

// Custom Quiz Functions
function createCustomQuiz() {
    const quizTitle = document.getElementById('quizTitle').value.trim();
    const questionElements = document.querySelectorAll('.question-container');
    
    // Check if quiz title is empty
    if (!quizTitle) {
        alert('Please enter a quiz title.');
        return;
    }
    
    // Check if there are any questions
    if (questionElements.length === 0) {
        alert('Please add at least one question to create a quiz.');
        return;
    }
    
    const questions = [];
    let hasError = false;
    
    questionElements.forEach((element, index) => {
        // Get the question text from the input field
        const questionInput = element.querySelector(`#question${index + 1}`);
        if (!questionInput) {
            alert(`Please enter text for Question ${index + 1}.`);
            hasError = true;
            return;
        }
        const questionText = questionInput.value.trim();
        
        // Get all option inputs
        const optionInputs = element.querySelectorAll('.option-input input[type="text"]');
        const options = Array.from(optionInputs).map(input => input.value.trim());
        
        // Get the selected correct answer
        const correctRadio = element.querySelector(`input[name="correct${index + 1}"]:checked`);
        
        // Validate question text
        if (!questionText) {
            alert(`Please enter text for Question ${index + 1}.`);
            hasError = true;
            return;
        }
        
        // Validate options
        if (options.some(opt => !opt)) {
            alert(`Please fill in all options for Question ${index + 1}.`);
            hasError = true;
            return;
        }
        
        // Validate correct answer selection
        if (!correctRadio) {
            alert(`Please select the correct answer for Question ${index + 1}.`);
            hasError = true;
            return;
        }
        
        questions.push({
            question: questionText,
            options: options,
            correct: parseInt(correctRadio.value)
        });
    });
    
    // If there were any validation errors, stop here
    if (hasError) {
        return;
    }
    
    const customQuiz = {
        title: quizTitle,
        questions: questions,
        date: new Date().toISOString()
    };
    
    // Generate a unique code for sharing
    const shareCode = generateShareCode();
    
    // Save to localStorage
    let customQuizzes = JSON.parse(localStorage.getItem('customQuizzes') || '[]');
    customQuizzes.push({ ...customQuiz, shareCode });
    localStorage.setItem('customQuizzes', JSON.stringify(customQuizzes));
    
    // Show success message with share options
    const gameContent = document.getElementById('gameContent');
    gameContent.innerHTML = `
        <div class="share-section">
            <h3>Quiz Created Successfully!</h3>
            <p>Share this quiz with your friends:</p>
            <div class="share-link-container">
                <input type="text" id="shareLink" value="${window.location.origin}${window.location.pathname}?quiz=${shareCode}" readonly>
                <button onclick="copyShareLink()" class="copy-btn">Copy Link</button>
            </div>
            <button onclick="startCustomQuiz(${JSON.stringify(customQuiz).replace(/"/g, '&quot;')})" class="play-btn">Play Quiz Now</button>
        </div>
    `;
    
    showModal('game');
}

function copyShareLink() {
    const shareLink = document.getElementById('shareLink');
    shareLink.select();
    document.execCommand('copy');
    
    const copyBtn = document.querySelector('.copy-btn');
    const originalText = copyBtn.textContent;
    copyBtn.textContent = 'Copied!';
    setTimeout(() => {
        copyBtn.textContent = originalText;
    }, 2000);
}

function generateShareCode() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = '';
    for (let i = 0; i < 6; i++) {
        code += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return code;
}

// Initialize EmailJS
(function() {
    emailjs.init("0cXx6OalGrjRUBLNx"); // You'll need to replace this with your EmailJS public key
})();

// Contact Form Handler
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    emailjs.send('service_rpteo7i', 'template_2727snm', formData)
        .then(function() {
            alert('Message sent successfully!');
            document.getElementById('contactForm').reset();
            document.getElementById('contactModal').classList.remove('show');
        }, function(error) {
            alert('Failed to send message. Please try again.');
            console.error('EmailJS error:', error);
        });
});

// Update the addQuestionField function
function addQuestionField() {
    const questionsContainer = document.getElementById('customQuestions');
    const questionNumber = questionsContainer.children.length + 1;
    
    const questionDiv = document.createElement('div');
    questionDiv.className = 'question-container';
    questionDiv.innerHTML = `
        <div class="question-header">
            <span class="question-number">Question ${questionNumber}</span>
            <button class="remove-question" onclick="this.parentElement.parentElement.remove()">Remove Question</button>
        </div>
        <div class="form-group">
            <label for="question${questionNumber}">Question Text:</label>
            <input type="text" id="question${questionNumber}" required>
        </div>
        <div class="options-container">
            <div class="option-input">
                <input type="radio" name="correct${questionNumber}" value="0" required>
                <input type="text" placeholder="Option 1" required>
                <button class="remove-option" onclick="this.parentElement.remove()">×</button>
            </div>
            <div class="option-input">
                <input type="radio" name="correct${questionNumber}" value="1" required>
                <input type="text" placeholder="Option 2" required>
                <button class="remove-option" onclick="this.parentElement.remove()">×</button>
            </div>
            <div class="option-input">
                <input type="radio" name="correct${questionNumber}" value="2" required>
                <input type="text" placeholder="Option 3" required>
                <button class="remove-option" onclick="this.parentElement.remove()">×</button>
            </div>
            <div class="option-input">
                <input type="radio" name="correct${questionNumber}" value="3" required>
                <input type="text" placeholder="Option 4" required>
                <button class="remove-option" onclick="this.parentElement.remove()">×</button>
            </div>
        </div>
        <button class="add-option" onclick="addOption(this)">Add Option</button>
    `;
    
    questionsContainer.appendChild(questionDiv);
}

// Add new function to add options
function addOption(button) {
    const optionsContainer = button.previousElementSibling;
    const optionNumber = optionsContainer.children.length + 1;
    
    const optionDiv = document.createElement('div');
    optionDiv.className = 'option-input';
    optionDiv.innerHTML = `
        <input type="radio" name="correct${button.closest('.question-container').querySelector('.question-number').textContent.split(' ')[1]}" value="${optionNumber - 1}" required>
        <input type="text" placeholder="Option ${optionNumber}" required>
        <button class="remove-option" onclick="this.parentElement.remove()">×</button>
    `;
    
    optionsContainer.appendChild(optionDiv);
}

function startCustomQuiz(quiz) {
    currentCustomQuiz = quiz;
    questions = quiz.questions;
    currentQuestion = 0;
    score = 0;
    currentGameType = 'custom';
    currentDifficulty = 'custom';
    
    const gameTitle = document.getElementById('gameTitle');
    gameTitle.textContent = quiz.title;
    
    showModal('game');
    displayQuestion();
}

// Show game selection
function showGameSelection() {
    const main = document.querySelector('main');
    main.innerHTML = `
        <section class="hero">
            <h2>Welcome to MindMatchUp</h2>
            <p>Challenge your mind with our interactive quiz games!</p>
        </section>

        <section class="games-grid">
            <div class="game-card" data-game="general">
                <h3>General Knowledge</h3>
                <p>Test your knowledge across various topics</p>
                <button class="play-btn" onclick="showDifficultySelection('general')">Play Now</button>
            </div>
            <div class="game-card" data-game="maths">
                <h3>Maths Challenge</h3>
                <p>Put your mathematical skills to the test</p>
                <button class="play-btn" onclick="showDifficultySelection('maths')">Play Now</button>
            </div>
            <div class="game-card" data-game="science">
                <h3>Science Quiz</h3>
                <p>Explore the world of science</p>
                <button class="play-btn" onclick="showDifficultySelection('science')">Play Now</button>
            </div>
            <div class="game-card" data-game="history">
                <h3>History Quest</h3>
                <p>Journey through time and history</p>
                <button class="play-btn" onclick="showDifficultySelection('history')">Play Now</button>
            </div>
        </section>
    `;
}

// Add function to handle shared quiz loading
function loadSharedQuiz() {
    const urlParams = new URLSearchParams(window.location.search);
    const quizCode = urlParams.get('quiz');
    
    if (quizCode) {
        const customQuizzes = JSON.parse(localStorage.getItem('customQuizzes') || '[]');
        const sharedQuiz = customQuizzes.find(quiz => quiz.shareCode === quizCode);
        
        if (sharedQuiz) {
            startCustomQuiz(sharedQuiz);
        } else {
            alert('Quiz not found. Please check the link and try again.');
        }
    }
} 
