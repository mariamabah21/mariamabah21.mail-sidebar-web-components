// VIDEO EXAMPLE

const gmailSideBarTemplate = document.getElementById("gmail-template");

class GmailBar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.shadowRoot.append(gmailSideBarTemplate.content.cloneNode(true));
    const text = this.getAttribute("text");
    const unreadCount = this.getAttribute("unreadCount");
    const select = this.getAttribute("select");

    // console.log(unreadCount);
    console.log(text);
    console.log(unreadCount);
    this.shadowRoot.querySelector("p").innerText = text;
  }
}

window.customElements.define("app-sidebar-button", GmailBar);
