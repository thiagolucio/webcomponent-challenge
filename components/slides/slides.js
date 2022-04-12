const template = document.createElement("template");
template.innerHTML = `

    <link rel="stylesheet" href="components/slides/slides.css"/>      
            
        <div class="slider">
            <h1> SLIDES </h1>
        </div>
`;

class Slides extends HTMLElement {
    constructor() {

        super();
        this.attachShadow({ mode: 'open' })
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        this.shadowRoot.querySelector("h1").innerHTML = "SLIDES FODAS";        
    }
}

customElements.define('component-slides', Slides);