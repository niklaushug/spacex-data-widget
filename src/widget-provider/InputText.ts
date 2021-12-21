import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('input-text')
export class InputNumber extends LitElement {
  @property({ type: String }) key = '';

  @property({ type: String }) label = '';

  @property({ type: String }) value = '';

  changeHandler(event: InputEvent): void {
    this.value = (event.target as HTMLInputElement).value;

    this.dispatchEvent(
      new CustomEvent('valueChanged', {
        detail: {
          key: this.key,
          value: this.value,
        },
      })
    );
  }

  render() {
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
