class PeriodicElement extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get observedAttributes() {
        return ['tag', 'number', 'group'];
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.render();
    }

    render() {
        const tag = this.getAttribute('tag') || '';
        const number = this.getAttribute('number') || '';
        const group = this.getAttribute('group') || '';

        this.shadowRoot.innerHTML = `
        <style>
            :host {
              display: inline-block;
            }

            div.root {
                background-color: var(--color-root);
            }

            div.tabular {
                background-color: var(--color-tabular);
            }

            div.metadata {
                background-color: var(--color-metadata);
                color: var(--font-colour-light);
            }

            div.text {
                background-color: var(--color-text);
            }

            div.grouping {
                background-color: var(--color-grouping);
            }

            div.forms {
                background-color: var(--color-forms);
                color: var(--font-colour-light);
            }

            div.document {
                background-color: var(--color-document);
                color: var(--font-colour-light);
            }

            div.interactive {
                background-color: var(--color-interactive);
                color: var(--font-colour-light);
            }

            div.embedding {
                background-color: var(--color-embedding);
                color: var(--font-colour-light);
            }

            div.element {
                min-width: var(--element-min-width);
                min-height: var(--element-min-height);
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                font-size: var(--font-size-small);
                border: none;
                border-radius: var(--border-radius);
                text-align: center;
                position: relative;

                span.number {
                    position: absolute;
                    left: 8px;
                    top: 8px;
                }
            
                button {
                    all: unset;
                    cursor: pointer;
                    font-weight: bold;
                }
            }

            div.element:hover {
                transform: scale(1.5);
                transition: transform 0.3s;
                box-shadow: 0 0 10px rgba(212, 212, 212, 0.5);
                z-index: 1;
            }
        </style>
        <div class="element ${group}">
            <span class="number">${number}</span>
            <button class="tag" popovertarget="article-popover" popoveraction="toggle">
                ${tag}
            </button>
        </div>
        `;
    }
}

customElements.define('periodic-element', PeriodicElement);