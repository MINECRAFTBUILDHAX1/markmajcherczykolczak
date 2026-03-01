class MemoryGame {
    constructor(difficulty) {
        this.difficulty = difficulty;
        this.score = 0;
        this.timeLeft = this.getTimeLimit();
        this.timer = null;
        this.cards = [];
        this.flippedCards = [];
        this.matchedPairs = 0;
        this.totalPairs = gameTypes.memory.difficulties[difficulty].pairs;
        this.initializeCards();
    }

    getTimeLimit() {
        switch(this.difficulty) {
            case 'easy': return 120;
            case 'medium': return 90;
            case 'hard': return 60;
            case 'impossible': return 45;
            default: return 60;
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

    initializeCards() {
        const emojis = ['🎮', '🎲', '🎯', '🎨', '🎭', '🎪', '🎟️', '🎠', '🎡', '🎢', '🎣', '🎤'];
        this.cards = [];
        
        // Create pairs of cards
        for (let i = 0; i < this.totalPairs; i++) {
            this.cards.push(emojis[i]);
            this.cards.push(emojis[i]);
        }
        
        // Shuffle cards
        this.shuffleCards();
    }

    shuffleCards() {
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }

    start() {
        const main = document.querySelector('main');
        main.innerHTML = `
            <div class="game-header">
                <div class="score-display">Score: ${this.score}</div>
                <div class="timer-display">Time: ${this.timeLeft}s</div>
            </div>
            <div class="memory-grid">
                ${this.cards.map((card, index) => `
                    <div class="memory-card" onclick="window.currentGame.flipCard(${index})">
                        <div class="card-inner">
                            <div class="card-front">?</div>
                            <div class="card-back">${card}</div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
        this.startTimer();
        window.currentGame = this;
    }

    flipCard(index) {
        if (this.flippedCards.length === 2 || this.flippedCards.includes(index)) return;

        const card = document.querySelectorAll('.memory-card')[index];
        card.classList.add('flipped');
        this.flippedCards.push(index);

        if (this.flippedCards.length === 2) {
            this.checkMatch();
        }
    }

    checkMatch() {
        const [first, second] = this.flippedCards;
        const match = this.cards[first] === this.cards[second];

        if (match) {
            this.matchedPairs++;
            this.score += this.getPoints();
            playSound('correct');
            this.flippedCards = [];
            
            if (this.matchedPairs === this.totalPairs) {
                this.endGame();
            }
        } else {
            playSound('wrong');
            setTimeout(() => {
                const cards = document.querySelectorAll('.memory-card');
                cards[first].classList.remove('flipped');
                cards[second].classList.remove('flipped');
                this.flippedCards = [];
            }, 1000);
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
                <p>Pairs Matched: ${this.matchedPairs}/${this.totalPairs}</p>
                <div class="game-over-buttons">
                    <button onclick="showGameSelection()" class="cta-button">Play Again</button>
                    <button onclick="challengeFriend()" class="cta-button secondary">Challenge Friend</button>
                </div>
            </section>
        `;
        saveScore(this.score, 'memory', this.difficulty, 'Player');
    }
} 