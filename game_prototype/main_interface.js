// fetch('../game_prototype/main_interface.html')
//   .then(response => response.text())
//   .then(html => {
//     const parser = new DOMParser();
//     const doc = parser.parseFromString(html, 'text/html');
//     const template = doc.getElementById('my-box-template'); // Ensure this matches the template ID in HTML

//     class MyBox extends HTMLElement {
//       constructor() {
//         super();
//         const shadow = this.attachShadow({ mode: 'open' });
//         shadow.appendChild(template.content.cloneNode(true));
//       }
//     }

//     customElements.define('game-box', MyBox);
//   })
//   .catch(err => console.error("Failed to load the template:", err));  // Handling errors


fetch('../game_prototype/main_interface.html')
    .then(response => {
    if (!response.ok) {
        throw new Error("Failed to load template HTML");
    }
    return response.text();
    })
    .then(html => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const template = doc.getElementById('game-template');

    if (!template) {
        console.error('Template not found in main_interface.html');
        return;
    }

    class Game extends HTMLElement {
        constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.appendChild(template.content.cloneNode(true));

        this.beginGameButton = shadow.getElementById('begin-game');
        this.timerElement = shadow.getElementById('timer');
        this.gameButtonsContainer = shadow.getElementById('game-buttons-container');
        this.timeElapsed = 0;
        this.timerInterval = null;
        }

        connectedCallback() {
        this.beginGameButton.addEventListener('click', () => this.startGame());
        }

        startGame() {
        this.timeElapsed = 0;
        this.gameButtonsContainer.innerHTML = '';
        this.startTimer();
        this.createGameButtons();
        }

        startTimer() {
        this.timerElement.textContent = `Time: 0s`;
        this.timerInterval = setInterval(() => {
            this.timeElapsed++;
            this.timerElement.textContent = `Time: ${this.timeElapsed}s`;
        }, 1000);
        }

        createGameButtons() {
        const numberOfButtons = 5;
        let remaining = numberOfButtons;

        for (let i = 0; i < numberOfButtons; i++) {
            const btn = document.createElement('button');
            btn.textContent = `Button ${i + 1}`;
            btn.className = 'button';
            btn.addEventListener('click', () => {
            btn.disabled = true;
            remaining--;
            if (remaining === 0) {
                clearInterval(this.timerInterval);
                alert(`Game over! Time: ${this.timeElapsed}s`);
            }
            });
            this.gameButtonsContainer.appendChild(btn);
        }
        }
    }

    customElements.define('game-prototype', Game);
    })
    .catch(error => {
    console.error('Error loading template:', error);
    });
