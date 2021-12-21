import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('display-mode')
export class DisplayMode extends LitElement {
  render() {
    return html` <p>DisplayMode</p> `;
  }
}
