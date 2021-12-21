import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import '@apollo-elements/components/apollo-client';

import './ProviderFilter.js';
import './ProviderQuery.js';

@customElement('widget-provider')
export class WidgetProvider extends LitElement {
  render() {
    return html`
      <p>WidgetProvider</p>
      <apollo-client uri="https://api.spacex.land/graphql/">
        <provider-filter></provider-filter>
        <provider-query></provider-query>
      </apollo-client>
    `;
  }
}
