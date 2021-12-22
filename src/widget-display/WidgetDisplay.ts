import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { dynamicImport } from '../helpers.js';
import { ChartData } from './types.js';

import './DisplayMode.js';
import './DisplayTable.js';

import { LAUNCHES_PAST } from './launchesPast.js';

dynamicImport('./widget-display/DisplayChartBar.js');
dynamicImport('./widget-display/DisplayChartPie.js');
dynamicImport('/node_modules/highcharts-chart/highcharts-chart.js');

@customElement('widget-display')
export class WidgetDisplay extends LitElement {
  @property({ type: Array }) data?: ChartData[] = [];

  firstUpdated() {
    this.prepareDataForCharts();
  }

  render() {
    return html`
      <p>WidgetDisplay</p>
      <display-mode></display-mode>
      <display-table .data="${this.data}"></display-table>
      <display-chart-bar .data="${this.data}"></display-chart-bar>
      <display-chart-pie .data="${this.data}"></display-chart-pie>
    `;
  }

  private prepareDataForCharts() {
    // TODO improve this: check out Map/WeakMap and or UnderscoreJS
    const launchesYear = LAUNCHES_PAST.reduce((acc, cur) => {
      // @ts-ignore
      acc[cur.launch_year] = (acc[cur.launch_year] || 0) + 1;
      return acc;
    }, {});

    this.data = Object.entries(launchesYear).map(([year, size]) => ({
      name: year,
      y: size,
    }));
  }
}
