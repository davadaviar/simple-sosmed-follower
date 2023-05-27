class FooterComponent extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `<footer>&copy; 2023 HACKTIV8 🦊</footer>`;
    }
  }
  customElements.define('footer-component', FooterComponent);