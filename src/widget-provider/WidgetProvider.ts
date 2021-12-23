import { LitElement, html, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '@apollo-elements/components/apollo-client';

import './ProviderQuery';
import './InputNumber';
import './InputText';
import { CustomEventValueChanged } from '../typescript/types';

@customElement('widget-provider')
export class WidgetProvider extends LitElement {
  @property({ type: Number })
  limit: number = 50;

  @property({ type: String })
  missionName: string = '';

  valueChanged(event: CustomEventValueChanged): void {
    // @ts-ignore
    this[event.detail.key] = event.detail.value;
  }

  render(): TemplateResult {
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
