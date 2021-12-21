import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import './widget-provider/WidgetProvider.js';
import './widget-display/WidgetDisplay.js';

@customElement('data-widget')
export class DataWidget extends LitElement {
  @property({ type: String }) title = 'Data Widget';

  static styles = css``;

  render() {
    return html`
      <main>
        <h1>${this.title}</h1>
        <widget-provider></widget-provider>
        <widget-display></widget-display>
      </main>
    `;
  }
}
