export class Checker extends HTMLElement {
    constructor(color) {
        super();
        this.color = color;
    }

    static get observedAttribues() {
        return ["data-color"];
    }

    // connectedCallback() {
    //     this.render();
    // }

    attributeChangedCallback(attributeName, oldValue, newValue) {
        if (oldValue === newValue) return;
        if (attributeName == "data-color") this.color = newValue;
    }
}