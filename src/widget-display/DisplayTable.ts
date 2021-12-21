import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('display-table')
export class DisplayTable extends LitElement {
  render() {
    return html` <p>DisplayTable</p> `;
  }
}
