// Word Game Implementation
class WordGame {
    constructor(difficulty) {
        this.difficulty = difficulty;
        this.currentWord = 0;
        this.score = 0;
        this.words = gameTypes.word.difficulties[difficulty].words;
        this.timeLeft = this.getTimeLimit();
        this.timer = null;
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
                <h2>Word ${this.currentWord + 1}/${this.words.length}</h2>
                <div class="word-scramble">
                    <p>Unscramble this word:</p>
                    <div class="scrambled-word">${this.words[this.currentWord].scrambled}</div>
                    <input type="text" class="word-input" placeholder="Enter your answer..." onkeypress="if(event.key === 'Enter') window.currentGame.checkAnswer()">
                    <button class="submit-button" onclick="window.currentGame.checkAnswer()">Submit</button>
                </div>
            </div>
        `;
        this.startTimer();
        window.currentGame = this;
    }

    checkAnswer() {
        const input = document.querySelector('.word-input');
        const userAnswer = input.value.toLowerCase().trim();
        const correctAnswer = this.words[this.currentWord].word.toLowerCase();

        if (userAnswer === correctAnswer) {
            this.score += this.getPoints();
            playSound('correct');
        } else {
            playSound('wrong');
        }

        this.currentWord++;
        if (this.currentWord < this.words.length) {
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
        saveScore(this.score, 'word', this.difficulty, 'Player');
    }
} 