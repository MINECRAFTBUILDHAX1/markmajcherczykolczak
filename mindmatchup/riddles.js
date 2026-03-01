class RiddlesGame {
    constructor(difficulty) {
        this.difficulty = difficulty;
        this.currentRiddle = 0;
        this.score = 0;
        this.riddles = gameTypes.riddles.difficulties[difficulty].riddles;
        this.timeLeft = this.getTimeLimit();
        this.timer = null;
        this.hintsUsed = 0;
    }

    getTimeLimit() {
        switch(this.difficulty) {
            case 'easy': return 60;
            case 'medium': return 45;
            case 'hard': return 30;
            case 'impossible': return 20;
            default: return 30;
        }
    }

    getPoints() {
        switch(this.difficulty) {
            case 'easy': return 10;
            case 'medium': return 20;
            case 'hard': return 30;
            case 'impossible': return 50;
            default: return 10;
        }
    }

    start() {
        const main = document.querySelector('main');
        main.innerHTML = `
            <div class="game-header">
                <div class="score-display">Score: ${this.score}</div>
                <div class="timer-display">Time: ${this.timeLeft}s</div>
            </div>
            <div class="question-card">
                <h2>Riddle ${this.currentRiddle + 1}/${this.riddles.length}</h2>
                <p>${this.riddles[this.currentRiddle].riddle}</p>
                <div class="hint-section">
                    <button class="hint-button" onclick="window.currentGame.showHint()">
                        Show Hint (-5 points)
                    </button>
                    <div id="hint-display" class="hint-display"></div>
                </div>
                <div class="answer-section">
                    <input type="text" id="answer-input" class="answer-input" placeholder="Enter your answer...">
                    <button class="submit-button" onclick="window.currentGame.checkAnswer()">Submit</button>
                </div>
            </div>
        `;
        this.startTimer();
        window.currentGame = this;
    }

    showHint() {
        if (this.hintsUsed < 2) {
            const hintDisplay = document.getElementById('hint-display');
            hintDisplay.textContent = this.riddles[this.currentRiddle].hint;
            this.score -= 5;
            this.hintsUsed++;
            const scoreDisplay = document.querySelector('.score-display');
            if (scoreDisplay) {
                scoreDisplay.textContent = `Score: ${this.score}`;
            }
        }
    }

    checkAnswer() {
        const input = document.getElementById('answer-input');
        const userAnswer = input.value.toLowerCase().trim();
        const correctAnswer = this.riddles[this.currentRiddle].answer.toLowerCase();

        if (userAnswer === correctAnswer) {
            this.score += this.getPoints();
            playSound('correct');
        } else {
            playSound('wrong');
        }

        this.currentRiddle++;
        this.hintsUsed = 0;
        if (this.currentRiddle < this.riddles.length) {
            this.start();
        } else {
            this.endGame();
        }
    }

    startTimer() {
        if (this.timer) clearInterval(this.timer);
        this.timer = setInterval(() => {
            this.timeLeft--;
            const timerDisplay = document.querySelector('.timer-display');
            if (timerDisplay) {
                timerDisplay.textContent = `Time: ${this.timeLeft}s`;
            }
            if (this.timeLeft <= 0) {
                clearInterval(this.timer);
                this.endGame();
            }
        }, 1000);
    }

    endGame() {
        clearInterval(this.timer);
        const main = document.querySelector('main');
        main.innerHTML = `
            <section class="game-over">
                <h2>Game Over!</h2>
                <p>Final Score: ${this.score}</p>
                <div class="game-over-buttons">
                    <button onclick="showGameSelection()" class="cta-button">Play Again</button>
                    <button onclick="challengeFriend()" class="cta-button secondary">Challenge Friend</button>
                </div>
            </section>
        `;
        saveScore(this.score, 'riddles', this.difficulty, 'Player');
    }
} 