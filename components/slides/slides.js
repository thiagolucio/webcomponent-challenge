const template = document.createElement("template");
template.innerHTML = `

    <link rel="stylesheet" href="components/slides/slides.css"/>       
            
    <div class="content_slides">
        slides
    </div>


`;

class Slides extends HTMLElement {
    constructor() {

        super();
        this.attachShadow({ mode: 'open' })
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

customElements.define('component-slides', Slides);