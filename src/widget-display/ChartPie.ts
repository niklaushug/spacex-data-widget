import { LitElement, html, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import 'highcharts-chart';

import { ChartData } from '../typescript/generated-types';

@customElement('display-chart-pie')
export class ChartPie extends LitElement {
  @property({ type: Array })
  data: ChartData[] = [];

  render(): TemplateResult {
    return html`
      <highcharts-chart
        type="pie"
        color-by-point
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
