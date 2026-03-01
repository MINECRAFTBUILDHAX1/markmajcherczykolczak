// Quiz Database
const quizDatabase = {
    general: {
        easy: {
            points: 10,
            questions: [
                {
                    question: "What is the capital of France?",
                    options: ["London", "Berlin", "Paris", "Madrid"],
                    correct: 2
                },
                {
                    question: "Which planet is known as the Red Planet?",
                    options: ["Venus", "Mars", "Jupiter", "Saturn"],
                    correct: 1
                },
                {
                    question: "What is the largest mammal in the world?",
                    options: ["African Elephant", "Blue Whale", "Giraffe", "Polar Bear"],
                    correct: 1
                },
                {
                    question: "Who painted the Mona Lisa?",
                    options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
                    correct: 2
                },
                {
                    question: "What is the chemical symbol for gold?",
                    options: ["Ag", "Au", "Fe", "Cu"],
                    correct: 1
                }
            ]
        },
        medium: {
            points: 20,
            questions: [
                {
                    question: "Which country invented tea?",
                    options: ["India", "China", "Japan", "England"],
                    correct: 1
                },
                {
                    question: "What is the fastest land animal?",
                    options: ["Lion", "Cheetah", "Leopard", "Gazelle"],
                    correct: 1
                },
                {
                    question: "Who wrote 'To Kill a Mockingbird'?",
                    options: ["Ernest Hemingway", "Harper Lee", "Mark Twain", "F. Scott Fitzgerald"],
                    correct: 1
                },
                {
                    question: "What is the largest organ in the human body?",
                    options: ["Brain", "Heart", "Liver", "Skin"],
                    correct: 3
                },
                {
                    question: "Which element has the chemical symbol 'O'?",
                    options: ["Gold", "Silver", "Oxygen", "Iron"],
                    correct: 2
                }
            ]
        },
        hard: {
            points: 30,
            questions: [
                {
                    question: "What is the name of the process by which plants convert light energy into chemical energy?",
                    options: ["Photosynthesis", "Respiration", "Fermentation", "Digestion"],
                    correct: 0
                },
                {
                    question: "Which scientist developed the theory of relativity?",
                    options: ["Isaac Newton", "Albert Einstein", "Stephen Hawking", "Niels Bohr"],
                    correct: 1
                },
                {
                    question: "What is the capital of Bhutan?",
                    options: ["Kathmandu", "Thimphu", "Dhaka", "Manila"],
                    correct: 1
                },
                {
                    question: "Which composer wrote 'The Four Seasons'?",
                    options: ["Mozart", "Bach", "Vivaldi", "Beethoven"],
                    correct: 2
                },
                {
                    question: "What is the atomic number of carbon?",
                    options: ["4", "6", "8", "12"],
                    correct: 1
                }
            ]
        }
    },
    maths: {
        easy: {
            points: 10,
            questions: [
                {
                    question: "What is 2 + 2?",
                    options: ["3", "4", "5", "6"],
                    correct: 1
                },
                {
                    question: "What is 5 × 3?",
                    options: ["10", "12", "15", "18"],
                    correct: 2
                },
                {
                    question: "What is 10 ÷ 2?",
                    options: ["3", "4", "5", "6"],
                    correct: 2
                },
                {
                    question: "What is 7 - 3?",
                    options: ["2", "3", "4", "5"],
                    correct: 2
                },
                {
                    question: "What is 4 squared?",
                    options: ["8", "12", "16", "20"],
                    correct: 2
                }
            ]
        },
        medium: {
            points: 20,
            questions: [
                {
                    question: "What is 15% of 200?",
                    options: ["20", "25", "30", "35"],
                    correct: 2
                },
                {
                    question: "What is the square root of 144?",
                    options: ["10", "12", "14", "16"],
                    correct: 1
                },
                {
                    question: "What is 3/4 of 100?",
                    options: ["50", "60", "75", "80"],
                    correct: 2
                },
                {
                    question: "What is the next number in the sequence: 2, 4, 8, 16, ...?",
                    options: ["20", "24", "32", "36"],
                    correct: 2
                },
                {
                    question: "What is the area of a square with sides of length 5?",
                    options: ["15", "20", "25", "30"],
                    correct: 2
                }
            ]
        },
        hard: {
            points: 30,
            questions: [
                {
                    question: "What is the value of π (pi) to two decimal places?",
                    options: ["3.12", "3.14", "3.16", "3.18"],
                    correct: 1
                },
                {
                    question: "What is the sum of the angles in a triangle?",
                    options: ["90°", "180°", "270°", "360°"],
                    correct: 1
                },
                {
                    question: "What is the next prime number after 17?",
                    options: ["19", "21", "23", "25"],
                    correct: 0
                },
                {
                    question: "What is the value of 2³ × 3²?",
                    options: ["36", "48", "72", "96"],
                    correct: 2
                },
                {
                    question: "What is the hypotenuse of a right triangle with sides 3 and 4?",
                    options: ["4", "5", "6", "7"],
                    correct: 1
                }
            ]
        }
    },
    science: {
        easy: {
            points: 10,
            questions: [
                {
                    question: "What is the chemical symbol for water?",
                    options: ["H2O", "CO2", "O2", "N2"],
                    correct: 0
                },
                {
                    question: "What is the closest planet to the Sun?",
                    options: ["Venus", "Mercury", "Earth", "Mars"],
                    correct: 1
                },
                {
                    question: "What is the hardest natural substance?",
                    options: ["Gold", "Iron", "Diamond", "Platinum"],
                    correct: 2
                },
                {
                    question: "What is the largest organ in the human body?",
                    options: ["Brain", "Heart", "Liver", "Skin"],
                    correct: 3
                },
                {
                    question: "What is the process by which plants make their food?",
                    options: ["Respiration", "Photosynthesis", "Digestion", "Fermentation"],
                    correct: 1
                }
            ]
        },
        medium: {
            points: 20,
            questions: [
                {
                    question: "What is the atomic number of carbon?",
                    options: ["4", "6", "8", "12"],
                    correct: 1
                },
                {
                    question: "What is the speed of light in meters per second?",
                    options: ["299,792,458", "199,792,458", "399,792,458", "499,792,458"],
                    correct: 0
                },
                {
                    question: "What is the chemical symbol for gold?",
                    options: ["Ag", "Au", "Fe", "Cu"],
                    correct: 1
                },
                {
                    question: "What is the process of cell division called?",
                    options: ["Mitosis", "Meiosis", "Fission", "Fusion"],
                    correct: 0
                },
                {
                    question: "What is the name of the force that pulls objects toward Earth?",
                    options: ["Magnetism", "Gravity", "Friction", "Tension"],
                    correct: 1
                }
            ]
        },
        hard: {
            points: 30,
            questions: [
                {
                    question: "What is the name of the theory that explains the origin of the universe?",
                    options: ["Big Bang Theory", "String Theory", "Quantum Theory", "Relativity Theory"],
                    correct: 0
                },
                {
                    question: "What is the chemical formula for sulfuric acid?",
                    options: ["H2SO4", "HCl", "HNO3", "H3PO4"],
                    correct: 0
                },
                {
                    question: "What is the name of the process by which DNA is copied?",
                    options: ["Transcription", "Translation", "Replication", "Mutation"],
                    correct: 2
                },
                {
                    question: "What is the name of the force that holds atomic nuclei together?",
                    options: ["Strong Force", "Weak Force", "Electromagnetic Force", "Gravitational Force"],
                    correct: 0
                },
                {
                    question: "What is the name of the particle that carries the electromagnetic force?",
                    options: ["Gluon", "Photon", "W Boson", "Z Boson"],
                    correct: 1
                }
            ]
        }
    },
    history: {
        easy: {
            points: 10,
            questions: [
                {
                    question: "Who was the first President of the United States?",
                    options: ["Thomas Jefferson", "John Adams", "George Washington", "Benjamin Franklin"],
                    correct: 2
                },
                {
                    question: "In which year did World War II end?",
                    options: ["1943", "1944", "1945", "1946"],
                    correct: 2
                },
                {
                    question: "Who painted the Mona Lisa?",
                    options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
                    correct: 2
                },
                {
                    question: "What was the name of the first human to walk on the moon?",
                    options: ["Buzz Aldrin", "Neil Armstrong", "Yuri Gagarin", "John Glenn"],
                    correct: 1
                },
                {
                    question: "In which year did the French Revolution begin?",
                    options: ["1776", "1789", "1799", "1804"],
                    correct: 1
                }
            ]
        },
        medium: {
            points: 20,
            questions: [
                {
                    question: "Who was the first Emperor of China?",
                    options: ["Qin Shi Huang", "Han Wudi", "Tang Taizong", "Kublai Khan"],
                    correct: 0
                },
                {
                    question: "What was the name of the first civilization to develop writing?",
                    options: ["Egyptians", "Sumerians", "Greeks", "Romans"],
                    correct: 1
                },
                {
                    question: "Who was the first woman to win a Nobel Prize?",
                    options: ["Marie Curie", "Mother Teresa", "Jane Addams", "Pearl Buck"],
                    correct: 0
                },
                {
                    question: "What was the name of the first computer programmer?",
                    options: ["Alan Turing", "Ada Lovelace", "Charles Babbage", "John von Neumann"],
                    correct: 1
                },
                {
                    question: "In which year did the Berlin Wall fall?",
                    options: ["1987", "1988", "1989", "1990"],
                    correct: 2
                }
            ]
        },
        hard: {
            points: 30,
            questions: [
                {
                    question: "Who was the first Emperor of Rome?",
                    options: ["Julius Caesar", "Augustus", "Nero", "Marcus Aurelius"],
                    correct: 1
                },
                {
                    question: "What was the name of the first civilization to develop a system of writing?",
                    options: ["Egyptians", "Sumerians", "Greeks", "Romans"],
                    correct: 1
                },
                {
                    question: "Who was the first woman to win a Nobel Prize?",
                    options: ["Marie Curie", "Mother Teresa", "Jane Addams", "Pearl Buck"],
                    correct: 0
                },
                {
                    question: "What was the name of the first computer programmer?",
                    options: ["Alan Turing", "Ada Lovelace", "Charles Babbage", "John von Neumann"],
                    correct: 1
                },
                {
                    question: "In which year did the Berlin Wall fall?",
                    options: ["1987", "1988", "1989", "1990"],
                    correct: 2
                }
            ]
        }
    }
};

// Game State
let currentGame = {
    type: null,
    difficulty: null,
    questions: [],
    currentQuestion: 0,
    score: 0,
    leaderboard: null
};

// Start Quiz Function
function startQuiz(gameType, difficulty) {
    currentGame = {
        type: gameType,
        difficulty: difficulty,
        questions: [...quizDatabase[gameType][difficulty].questions],
        currentQuestion: 0,
        score: 0,
        leaderboard: localStorage.getItem('currentLeaderboard')
    };

    displayQuestion();
}

// Display Question Function
function displayQuestion() {
    const gameContent = document.getElementById('gameContent');
    const question = currentGame.questions[currentGame.currentQuestion];

    gameContent.innerHTML = `
        <div class="question-container">
            <h3>Question ${currentGame.currentQuestion + 1} of ${currentGame.questions.length}</h3>
            <p>${question.question}</p>
            <div class="options-container">
                ${question.options.map((option, index) => `
                    <button class="option-btn" data-index="${index}">${option}</button>
                `).join('')}
            </div>
            <div class="score-display">Score: ${currentGame.score}</div>
        </div>
    `;

    // Add event listeners to options
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.addEventListener('click', () => checkAnswer(parseInt(btn.dataset.index)));
    });
}

// Check Answer Function
function checkAnswer(selectedIndex) {
    const question = currentGame.questions[currentGame.currentQuestion];
    const buttons = document.querySelectorAll('.option-btn');
    
    // Disable all buttons
    buttons.forEach(btn => btn.disabled = true);
    
    // Show correct/incorrect
    buttons.forEach((btn, index) => {
        if (index === question.correct) {
            btn.classList.add('correct');
            playSound('correct');
        } else if (index === selectedIndex) {
            btn.classList.add('incorrect');
            playSound('incorrect');
        }
    });

    // Update score
    if (selectedIndex === question.correct) {
        currentGame.score++;
    }

    // Wait before moving to next question
    setTimeout(() => {
        currentGame.currentQuestion++;
        if (currentGame.currentQuestion < currentGame.questions.length) {
            displayQuestion();
        } else {
            endGame();
        }
    }, 1500);
}

// End Game Function
function endGame() {
    const gameContent = document.getElementById('gameContent');
    
    gameContent.innerHTML = `
        <div class="question-container">
            <h3>Game Over!</h3>
            <p>Your final score: ${currentGame.score} out of ${currentGame.questions.length}</p>
            ${currentGame.leaderboard ? `
                <button class="play-btn" onclick="updateLeaderboard(${currentGame.score})">Save Score</button>
            ` : ''}
            <button class="play-btn" onclick="showModal('game')">Play Again</button>
        </div>
    `;
} 
