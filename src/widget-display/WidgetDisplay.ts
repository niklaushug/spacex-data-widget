import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { lazyLoad } from '../lazyLoadDirective.js';

import { ChartData, DisplayMode } from './types.js';

import { LAUNCHES_PAST } from './launchesPast.js';

@customElement('widget-display')
export class WidgetDisplay extends LitElement {
  @property({ type: Array }) data?: ChartData[] = [];

  @property({ type: String }) mode: DisplayMode = DisplayMode.TABLE;

  firstUpdated() {
    this.prepareDataForCharts();
  }

  handleDisplayMode(event: Event) {
    const mode: DisplayMode = (event.target as HTMLButtonElement).dataset
      .displayMode as DisplayMode;
    this.mode = Object.values(DisplayMode).includes(mode)
      ? mode
      : DisplayMode.TABLE;
  }

  _renderCurrentView() {
    switch (this.mode) {
      case DisplayMode.BAR:
        return lazyLoad(
          import('./DisplayChartBar.js'),
          html` <display-chart-bar .data="${this.data}"></display-chart-bar> `
        );
      case DisplayMode.PIE:
        return lazyLoad(
          import('./DisplayChartPie.js'),
          html` <display-chart-pie .data="${this.data}"></display-chart-pie> `
        );
      default:
        return lazyLoad(
          import('./DisplayTable.js'),
          html` <display-table .data="${this.data}"></display-table> `
        );
    }
  }

  render() {
    return html`
      <p>WidgetDisplay</p>
      <button
        @click="${this.handleDisplayMode}"
        data-display-mode="${DisplayMode.TABLE}"
      >
        Table
      </button>
      <button
        @click="${this.handleDisplayMode}"
        data-display-mode="${DisplayMode.BAR}"
      >
        Bar Chart
      </button>
      <button
        @click="${this.handleDisplayMode}"
        data-display-mode="${DisplayMode.PIE}"
      >
        Pie Chart
      </button>
      <main>${this._renderCurrentView()}</main>
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
