import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import 'highcharts-chart';

import { ChartData } from './types.js';

@customElement('display-chart-bar')
export class DisplayChartBar extends LitElement {
  @property({ type: Array }) data: ChartData[] = [];

  render() {
    return html`
      <h2>DisplayChartBar</h2>
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
