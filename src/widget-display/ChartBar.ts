import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import 'highcharts-chart';

import { ChartData } from '../typescript/types.js';

@customElement('display-chart-bar')
export class ChartBar extends LitElement {
  @property({ type: Array })
  data: ChartData[] = [];

  render() {
    return html`
      <highcharts-chart
        type="column"
        .data=${this.data}
        x-axis='{
            "type": "category",
            "title": {
                "text": "Year"
            }
          }'
        y-axis='{
          "title": {
              "text": "Count launches"
          }
        }'
      ></highcharts-chart>
    `;
  }
}
