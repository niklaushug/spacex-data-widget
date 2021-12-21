import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';

export class DataWidget extends LitElement {
  @property({ type: String }) title = 'Data Widget';

  static styles = css``;

  render() {
    return html`
      <main>
        <h1>${this.title}</h1>
      </main>
    `;
  }
}
