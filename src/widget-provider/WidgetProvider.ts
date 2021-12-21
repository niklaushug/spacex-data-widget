import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '@apollo-elements/components/apollo-client';

import './ProviderQuery.js';
import './InputNumber.js';
import './InputText.js';

@customElement('widget-provider')
export class WidgetProvider extends LitElement {
  @property({ type: Number }) limit = 5;

  @property({ type: String }) missionName = '';

  valueChanged(event: CustomEvent): void {
    // @ts-ignore
    this[event.detail.key] = event.detail.value;
  }

  render() {
    return html`
      <h2>Filter</h2>

      <input-number
        key="limit"
        label="Limit"
        .value="${this.limit}"
        @valueChanged="${this.valueChanged}"
      ></input-number>

      <br />

      <input-text
        key="missionName"
        label="Mission Name"
        .value="${this.missionName}"
        @valueChanged="${this.valueChanged}"
      ></input-text>

      <apollo-client uri="https://api.spacex.land/graphql/">
        <provider-query
          .limit="${this.limit}"
          .missionName="${this.missionName}"
        ></provider-query>
      </apollo-client>
    `;
  }
}
