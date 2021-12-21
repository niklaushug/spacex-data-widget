import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import './ProviderFilter.js';
import './ProviderQuery.js';

@customElement('widget-provider')
export class WidgetProvider extends LitElement {
  render() {
    return html`
      <p>WidgetProvider</p>
      <provider-filter></provider-filter>
      <provider-query></provider-query>
    `;
  }
}
