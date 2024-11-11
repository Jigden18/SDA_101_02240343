class MyCard extends HTMLElement {
    constructor() {
        super();

        // Creating shadow root
        const shadow = this.attachShadow({mode: 'open'});

        // creating card's structure
        const card = document.createElement('div');
        card.setAttribute('class', 'card');

        // Creating shadow DOM structure
        const header = document.createElement('div');
        header.setAttribute('class', 'header');
        const content = document.createElement('div');
        content.setAttribute('class', 'content');
        const footer = document.createElement('div');
        footer.setAttribute('class', 'footer');

        // append slots for header, content, and footer
        header.innerHTML = `<slot name="header"></slot>`;
        content.innerHTML = `<slot name="content"></slot>`;
        footer.innerHTML = `<slot name="footer"></slot>`;

        card.append(header, content, footer);

        // attach the card structure to the shadow DOM
        shadow.appendChild(card);

        // apply styles
        const style = document.createElement('style');
        style.textContent = `
            :host {
                display: block;
                width: 100%;
                max-width: 400px;
                margin: 10px auto;
                border-radius: var(--card-radius, 8px);
                border: 1px solid var(--card-border-color, #ddd);
                background-color: var(--card-background, #fff);
                box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            }

            .card {
                display: flex;
                flex-direction: column;
                padding: 16px;
            }

            .header {
                font-size: 1.25em;
                font-weight: bold;
                margin-bottom: 16px;
            }

            .content {
                flex-grow: 1;
                margin-bottom: 16px;
            }

            .footer {
                font-size: 0.875em;
                text-align: right;
                color: var(--footer-text-color, #888);
            }

            /* Optional: Customizable style based on attributes */
            .card img {
                max-width: 100%;
                height: auto;
                margin-top: 12px;
            }
        `;

        shadow.appendChild(style);

        // Fetch a random dachshund image from the Dog CEO API
        this.fetchRandomImage(content);
    }

    // fetch random dachshund image and display it in the content area
    async fetchRandomImage(contentElement) {
        try {
            const response = await fetch('https://dog.ceo/api/breed/dachshund/images');
            const data = await response.json();
            const imageUrl = data.message[Math.floor(Math.random() * data.message.length)];
            
            const imgElement = document.createElement('img');
            imgElement.src = imageUrl;
            imgElement.alt = 'Random Dachshund Image';
            contentElement.appendChild(imgElement);
        } catch (error) {
            console.error('Error fetching dog image:', error);
            const errorMessage = document.createElement('p');
            errorMessage.textContent = 'Failed to load image.';
            contentElement.appendChild(errorMessage);
        }
    }

    static get observedAttributes() {
        return ['card-title', 'card-subtitle', 'card-background', 'card-border-color', 'card-radius'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        // update the corresponding CSS custom property when an attribute is changed
        if (name === 'card-background') {
            this.style.setProperty('--card-background', newValue);
        } else if (name === 'card-border-color') {
            this.style.setProperty('--card-border-color', newValue);
        } else if (name === 'card-radius') {
            this.style.setProperty('--card-radius', newValue);
        }
    }
}

// define the custom element
customElements.define('my-card', MyCard);
