class BaseGame {
    constructor(difficulty) {
        this.difficulty = difficulty;
        this.score = 0;
        this.timeLeft = 0;
        this.timer = null;
        this.currentQuestion = 0;
        this.questions = [];
    }

    getTimeLimit() {
        const timeLimits = {
            easy: 60,
            medium: 45,
            hard: 30,
            impossible: 20
        };
        return timeLimits[this.difficulty];
    }

    getPoints() {
        const points = {
            easy: 10,
            medium: 20,
            hard: 30,
            impossible: 50
        };
        return points[this.difficulty];
    }

    startTimer() {
        this.timeLeft = this.getTimeLimit();
        this.timer = setInterval(() => {
            this.timeLeft--;
            this.updateTimerDisplay();
            if (this.timeLeft <= 0) {
                this.endGame();
            }
        }, 1000);
    }

    updateTimerDisplay() {
        const timerDisplay = document.querySelector('.timer-display');
        if (timerDisplay) {
            timerDisplay.textContent = `Time: ${this.timeLeft}s`;
        }
    }

    updateScoreDisplay() {
        const scoreDisplay = document.querySelector('.score-display');
        if (scoreDisplay) {
            scoreDisplay.textContent = `Score: ${this.score}`;
        }
    }

    playSound(type) {
        const sounds = {
            correct: new Audio('sounds/correct.mp3'),
            wrong: new Audio('sounds/wrong.mp3'),
            click: new Audio('sounds/click.mp3')
        };
        if (sounds[type]) {
            sounds[type].currentTime = 0;
            sounds[type].play();
        }
    }

    endGame() {
        clearInterval(this.timer);
        const main = document.querySelector('main');
        main.innerHTML = `
            <div class="game-over">
                <h2>Game Over!</h2>
                <p>Final Score: ${this.score}</p>
                <div class="game-over-buttons">
                    <button onclick="startGame('${this.constructor.name.toLowerCase().replace('game', '')}', '${this.difficulty}')" class="cta-button">Play Again</button>
                    <button onclick="challengeFriend()" class="cta-button secondary">Challenge Friend</button>
                </div>
            </div>
        `;
        saveScore(this.score, this.constructor.name.toLowerCase().replace('game', ''), this.difficulty);
    }

    start() {
        const main = document.querySelector('main');
        main.innerHTML = `
            <div class="game-header">
                <div class="score-display">Score: 0</div>
                <div class="timer-display">Time: ${this.getTimeLimit()}s</div>
            </div>
            <div class="question-card">
                <h2>Loading...</h2>
            </div>
        `;
        this.startTimer();
    }
} 