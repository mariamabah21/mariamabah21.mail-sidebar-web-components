class GmailBar extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = "Hello";
  }
  disconnectedCallback() {
    this.innerHTML = "Bye";
  }
}

const slot = document.createElement("slot");
document.body.append(slot);
console.log(slot);
