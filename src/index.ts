// Import the LitElement base class and html helper function
import { LitElement, html, css, property } from "lit-element";
import { TemplateResult } from "lit-html";

// Extend the LitElement base class
export default class Avatar extends LitElement {
  @property() name: string = "Martin";
  @property() avatar: string = "martindvm";

  static get styles() {
    return css`
      img {
        background: #ddd;
        border-radius: 100%;
        width: 100px;
        border: 4px solid #bbb;
      }
    `;
  }

  render(): TemplateResult {
    return html`
      <img src="https://robohash.org/${this.avatar}" />
    `;
  }
}

customElements.define("custom-element", Avatar);
