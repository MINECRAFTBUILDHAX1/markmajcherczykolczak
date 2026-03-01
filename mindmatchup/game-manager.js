// Game Manager Implementation
class GameManager {
    constructor() {
        this.currentGame = null;
    }

    startGame(gameType, difficulty) {
        // Clear any existing game
        if (this.currentGame) {
            this.currentGame = null;
        }

        // Initialize the appropriate game
        switch(gameType) {
            case 'quiz':
                this.currentGame = new QuizGame(difficulty);
                break;
            case 'picture':
                this.currentGame = new PictureGame(difficulty);
                break;
            case 'word':
                this.currentGame = new WordGame(difficulty);
                break;
            case 'maths':
                this.currentGame = new MathsGame(difficulty);
                break;
            case 'memory':
                this.currentGame = new MemoryGame(difficulty);
                break;
            case 'logic':
                this.currentGame = new LogicGame(difficulty);
                break;
            case 'trivia':
                this.currentGame = new TriviaGame(difficulty);
                break;
            case 'riddles':
                this.currentGame = new RiddlesGame(difficulty);
                break;
            default:
                console.error('Unknown game type:', gameType);
                return;
        }

        // Start the game
        if (this.currentGame) {
            this.currentGame.start();
        }
    }

    showGameSelection() {
        const gameContainer = document.getElementById('game-container');
        if (gameContainer) {
            gameContainer.innerHTML = `
                <div class="game-selection">
                    <h2>Select a Game</h2>
                    <div class="game-grid">
                        <div class="game-card" onclick="gameManager.selectGame('quiz')">
                            <i class="fas fa-question-circle"></i>
                            <h3>Quiz Challenge</h3>
                            <p>Test your knowledge with multiple choice questions</p>
                        </div>
                        <div class="game-card" onclick="gameManager.selectGame('picture')">
                            <i class="fas fa-image"></i>
                            <h3>Picture Round</h3>
                            <p>Identify famous landmarks, art pieces, and more</p>
                        </div>
                        <div class="game-card" onclick="gameManager.selectGame('word')">
                            <i class="fas fa-puzzle-piece"></i>
                            <h3>Word Puzzle</h3>
                            <p>Unscramble words and solve word puzzles</p>
                        </div>
                        <div class="game-card" onclick="gameManager.selectGame('maths')">
                            <i class="fas fa-calculator"></i>
                            <h3>Maths Challenge</h3>
                            <p>Solve mathematical problems of varying difficulty</p>
                        </div>
                        <div class="game-card" onclick="gameManager.selectGame('memory')">
                            <i class="fas fa-brain"></i>
                            <h3>Memory Match</h3>
                            <p>Test your memory by matching pairs of cards</p>
                        </div>
                        <div class="game-card" onclick="gameManager.selectGame('logic')">
                            <i class="fas fa-chess"></i>
                            <h3>Logic Puzzles</h3>
                            <p>Solve challenging logic and reasoning problems</p>
                        </div>
                        <div class="game-card" onclick="gameManager.selectGame('trivia')">
                            <i class="fas fa-trophy"></i>
                            <h3>Trivia Master</h3>
                            <p>Answer trivia questions from various categories</p>
                        </div>
                        <div class="game-card" onclick="gameManager.selectGame('riddles')">
                            <i class="fas fa-lightbulb"></i>
                            <h3>Riddle Challenge</h3>
                            <p>Solve tricky riddles and brain teasers</p>
                        </div>
                    </div>
                </div>
            `;
        }
    }

    selectGame(gameType) {
        const gameContainer = document.getElementById('game-container');
        if (gameContainer) {
            gameContainer.innerHTML = `
                <div class="difficulty-selection">
                    <h2>Select Difficulty</h2>
                    <div class="difficulty-grid">
                        <button class="difficulty-button easy" onclick="gameManager.startGame('${gameType}', 'easy')">
                            Easy (10 points)
                        </button>
                        <button class="difficulty-button medium" onclick="gameManager.startGame('${gameType}', 'medium')">
                            Medium (20 points)
                        </button>
                        <button class="difficulty-button hard" onclick="gameManager.startGame('${gameType}', 'hard')">
                            Hard (30 points)
                        </button>
                        <button class="difficulty-button impossible" onclick="gameManager.startGame('${gameType}', 'impossible')">
                            Impossible (50 points)
                        </button>
                    </div>
                </div>
            `;
        }
    }

    challengeFriend() {
        if (!this.currentGame) return;
        
        const gameContainer = document.getElementById('game-container');
        if (gameContainer) {
            gameContainer.innerHTML = `
                <div class="challenge-form">
                    <h2>Challenge a Friend</h2>
                    <p>Share your leaderboard code with a friend to compare scores!</p>
                    <div class="input-group">
                        <input type="text" id="friend-email" placeholder="Enter friend's email">
                        <button onclick="gameManager.sendChallenge()" class="cta-button">Send Challenge</button>
                    </div>
                </div>
            `;
        }
    }

    sendChallenge() {
        const email = document.getElementById('friend-email').value;
        if (!email) {
            alert('Please enter your friend\'s email address');
            return;
        }

        // Here you would typically send the challenge email
        // For now, we'll just show a success message
        const gameContainer = document.getElementById('game-container');
        if (gameContainer) {
            gameContainer.innerHTML = `
                <div class="challenge-success">
                    <h2>Challenge Sent!</h2>
                    <p>Your friend will receive an email with the challenge details.</p>
                    <button onclick="gameManager.showGameSelection()" class="cta-button">Back to Games</button>
                </div>
            `;
        }
    }
}

// Initialize the game manager
const gameManager = new GameManager(); 
