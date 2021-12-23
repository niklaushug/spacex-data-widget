import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '@apollo-elements/components/apollo-client';

import './ProviderQuery';
import './InputNumber';
import './InputText';

@customElement('widget-provider')
export class WidgetProvider extends LitElement {
  @property({ type: Number })
  limit = 50;

  @property({ type: String })
  missionName = '';

  valueChanged(event: CustomEvent): void {
    // @ts-ignore
    this[event.detail.key] = event.detail.value;
  }

  render() {
    return html`
      <input-number
        key="limit"
        label="Limit"
        .value="${this.limit}"
        @valueChanged="${this.valueChanged}"
      ></input-number>

      <br /><br />

      <input-text
        key="missionName"
        label="Mission Name"
        .value="${this.missionName}"
        @valueChanged="${this.valueChanged}"
      ></input-text>

      <br /><br />

      <provider-query
        .limit="${this.limit}"
        .missionName="${this.missionName}"
      ></provider-query>
    `;
  }
}
