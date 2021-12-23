import { LitElement, html, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { CustomEventValueChanged } from '../typescript/types';

@customElement('input-text')
export class InputText extends LitElement {
  @property({ type: String })
  key: string = '';

  @property({ type: String })
  label: string = '';

  @property({ type: String })
  value = '';

  changeHandler(event: InputEvent): void {
    this.value = (event.target as HTMLInputElement).value;

    const customEvent: CustomEventValueChanged = new CustomEvent(
      'valueChanged',
      {
        detail: {
          key: this.key,
          value: this.value,
        },
      }
    );

    this.dispatchEvent(customEvent);
  }

  render(): TemplateResult {
    return html`
      <label>
        ${this.label}
        <input
          type="text"
          .value="${this.value}"
          @change="${this.changeHandler}"
        />
      </label>
    `;
  }
}
