import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { ChartData } from '../typescript/types';

@customElement('display-table')
export class Table extends LitElement {
  @property({ type: Array })
  data: ChartData[] = [];

  render() {
    return html`
      <table>
        <thead>
          <tr>
            <th>Year</th>
            <th>Count</th>
          </tr>
          ${this.data.length > 0 &&
          this.data.map(
            entry => html`
              <tr>
                <td>${entry.name}</td>
                <td>${entry.y}</td>
              </tr>
            `
          )}
        </thead>
      </table>
    `;
  }
}
