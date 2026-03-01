// Leaderboard System
class LeaderboardSystem {
    constructor() {
        this.leaderboards = new Map();
        this.currentLeaderboard = null;
        this.playerNickname = localStorage.getItem('playerNickname') || 'Player';
    }

    createLeaderboard(code) {
        if (this.leaderboards.has(code)) {
            return false;
        }
        this.leaderboards.set(code, []);
        return true;
    }

    joinLeaderboard(code) {
        if (!this.leaderboards.has(code)) {
            return false;
        }
        this.currentLeaderboard = code;
        return true;
    }

    addScore(score) {
        if (!this.currentLeaderboard) {
            return false;
        }

        const leaderboard = this.leaderboards.get(this.currentLeaderboard);
        const entry = {
            nickname: this.playerNickname,
            score: score,
            date: new Date().toISOString()
        };

        leaderboard.push(entry);
        leaderboard.sort((a, b) => b.score - a.score);
        this.saveLeaderboard();
        return true;
    }

    getLeaderboard(code) {
        return this.leaderboards.get(code) || [];
    }

    setNickname(nickname) {
        this.playerNickname = nickname;
        localStorage.setItem('playerNickname', nickname);
    }

    saveLeaderboard() {
        if (this.currentLeaderboard) {
            localStorage.setItem(`leaderboard_${this.currentLeaderboard}`, 
                JSON.stringify(this.leaderboards.get(this.currentLeaderboard)));
        }
    }

    loadLeaderboard(code) {
        const saved = localStorage.getItem(`leaderboard_${code}`);
        if (saved) {
            this.leaderboards.set(code, JSON.parse(saved));
        }
    }

    showLeaderboard() {
        const main = document.querySelector('main');
        if (!this.currentLeaderboard) {
            main.innerHTML = `
                <div class="leaderboard-section">
                    <h2>Leaderboard</h2>
                    <div class="leaderboard-join">
                        <h3>Join a Leaderboard</h3>
                        <input type="text" id="leaderboardCode" placeholder="Enter leaderboard code">
                        <button onclick="window.leaderboardSystem.joinLeaderboard(document.getElementById('leaderboardCode').value)" class="cta-button">Join</button>
                    </div>
                    <div class="leaderboard-create">
                        <h3>Create New Leaderboard</h3>
                        <button onclick="window.leaderboardSystem.createNewLeaderboard()" class="cta-button">Create New</button>
                    </div>
                </div>
            `;
            return;
        }

        const leaderboard = this.getLeaderboard(this.currentLeaderboard);
        main.innerHTML = `
            <div class="leaderboard-section">
                <h2>Leaderboard</h2>
                <div class="leaderboard-code">
                    <p>Share this code with friends: <strong>${this.currentLeaderboard}</strong></p>
                    <button onclick="window.leaderboardSystem.copyLeaderboardCode()" class="cta-button">Copy Code</button>
                </div>
                <div class="leaderboard-content">
                    <table>
                        <thead>
                            <tr>
                                <th>Rank</th>
                                <th>Player</th>
                                <th>Score</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${leaderboard.map((entry, index) => `
                                <tr>
                                    <td>${index + 1}</td>
                                    <td>${entry.nickname}</td>
                                    <td>${entry.score}</td>
                                    <td>${new Date(entry.date).toLocaleDateString()}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
                <div class="leaderboard-actions">
                    <button onclick="window.leaderboardSystem.createNewLeaderboard()" class="cta-button">Create New</button>
                    <button onclick="window.leaderboardSystem.joinLeaderboard('')" class="cta-button">Join Different</button>
                </div>
            </div>
        `;
    }

    createNewLeaderboard() {
        const code = Math.random().toString(36).substring(2, 8).toUpperCase();
        if (this.createLeaderboard(code)) {
            this.currentLeaderboard = code;
            this.showLeaderboard();
        }
    }

    copyLeaderboardCode() {
        navigator.clipboard.writeText(this.currentLeaderboard)
            .then(() => {
                alert('Leaderboard code copied to clipboard!');
            })
            .catch(err => {
                console.error('Failed to copy code:', err);
            });
    }
}

// Initialize the leaderboard system
window.leaderboardSystem = new LeaderboardSystem();

// Update the saveScore function to use the leaderboard system
function saveScore(score, gameType, difficulty, nickname) {
    const code = localStorage.getItem('leaderboardCode');
    if (!nickname) {
        nickname = leaderboardSystem.promptNickname();
    }
    leaderboardSystem.addScore(score, gameType, difficulty, nickname);
}

// Leaderboard Management
let leaderboards = JSON.parse(localStorage.getItem('leaderboards')) || {};

// Create Leaderboard Function
function createLeaderboard() {
    const joinCode = generateJoinCode();
    const leaderboard = {
        id: joinCode,
        scores: [],
        created: new Date().toISOString()
    };

    leaderboards[joinCode] = leaderboard;
    localStorage.setItem('leaderboards', JSON.stringify(leaderboards));
    localStorage.setItem('currentLeaderboard', joinCode);

    updateLeaderboardDisplay();
    return joinCode;
}

// Generate Join Code Function
function generateJoinCode() {
    const prefix = 'MMU-';
    const randomNum = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
    return prefix + randomNum;
}

// Join Leaderboard Function
function joinLeaderboard(joinCode) {
    if (leaderboards[joinCode]) {
        localStorage.setItem('currentLeaderboard', joinCode);
        updateLeaderboardDisplay();
        return true;
    }
    return false;
}

// Update Leaderboard Function
function updateLeaderboard(score) {
    const joinCode = localStorage.getItem('currentLeaderboard');
    if (!joinCode || !leaderboards[joinCode]) return;

    const playerName = prompt('Enter your name:');
    if (!playerName) return;

    const newScore = {
        name: playerName,
        score: score,
        date: new Date().toISOString()
    };

    leaderboards[joinCode].scores.push(newScore);
    leaderboards[joinCode].scores.sort((a, b) => b.score - a.score);
    localStorage.setItem('leaderboards', JSON.stringify(leaderboards));

    updateLeaderboardDisplay();
}

// Update Leaderboard Display Function
function updateLeaderboardDisplay() {
    const leaderboardList = document.getElementById('leaderboardList');
    const joinCode = localStorage.getItem('currentLeaderboard');

    if (!joinCode || !leaderboards[joinCode]) {
        leaderboardList.innerHTML = `
            <p>No active leaderboard. Create or join one to get started!</p>
            <div id="leaderboardControls">
                <button id="createLeaderboard">Create New Leaderboard</button>
                <div id="joinLeaderboard">
                    <input type="text" id="joinCode" placeholder="Enter join code">
                    <button id="joinBtn">Join</button>
                </div>
            </div>
        `;
        return;
    }

    const leaderboard = leaderboards[joinCode];
    leaderboardList.innerHTML = `
        <h3>Leaderboard: ${joinCode}</h3>
        <div class="leaderboard-scores">
            ${leaderboard.scores.map((score, index) => `
                <div class="score-entry">
                    <span class="rank">#${index + 1}</span>
                    <span class="name">${score.name}</span>
                    <span class="score">${score.score}</span>
                    <span class="date">${new Date(score.date).toLocaleDateString()}</span>
                </div>
            `).join('')}
        </div>
        <button class="reset-btn" onclick="resetLeaderboard('${joinCode}')">Reset Leaderboard</button>
    `;
}

// Reset Leaderboard Function
function resetLeaderboard(joinCode) {
    if (confirm('Are you sure you want to reset this leaderboard? This action cannot be undone.')) {
        leaderboards[joinCode].scores = [];
        localStorage.setItem('leaderboards', JSON.stringify(leaderboards));
        updateLeaderboardDisplay();
    }
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    const createBtn = document.getElementById('createLeaderboard');
    const joinBtn = document.getElementById('joinBtn');
    const joinCodeInput = document.getElementById('joinCode');

    if (createBtn) {
        createBtn.addEventListener('click', () => {
            const joinCode = createLeaderboard();
            alert(`Leaderboard created! Share this code with your friends: ${joinCode}`);
        });
    }

    if (joinBtn && joinCodeInput) {
        joinBtn.addEventListener('click', () => {
            const joinCode = joinCodeInput.value.trim();
            if (joinLeaderboard(joinCode)) {
                alert('Successfully joined the leaderboard!');
            } else {
                alert('Invalid join code. Please try again.');
            }
        });
    }

    // Initialize leaderboard display
    updateLeaderboardDisplay();
}); 