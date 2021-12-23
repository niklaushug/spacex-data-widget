import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import './widget-provider/WidgetProvider';
import './widget-display/WidgetDisplay';

@customElement('data-widget')
export class DataWidget extends LitElement {
  render() {
    return html`
      <main>
        <widget-provider></widget-provider>
        <widget-display></widget-display>
      </main>
    `;
  }
}
