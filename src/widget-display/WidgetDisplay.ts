import { html, LitElement } from 'lit';
import { ApolloQueryController } from '@apollo-elements/core';
import { customElement } from 'lit/decorators.js';

import { lazyLoad } from '../helpers/lazyLoadDirective';
import {
  ChartData,
  DisplayMode,
  ApolloQueryControllerI,
} from '../typescript/types';
import { client, displayModeVar } from '../apollo';

import DisplayModeGql from '../graphql/DisplayMode.query.graphql';
import LaunchesPerYearGql from '../graphql/LaunchesPerYear.query.graphql';

@customElement('widget-display')
export class WidgetDisplay extends LitElement {
  queryDisplayMode: ApolloQueryControllerI = new ApolloQueryController(
    this,
    DisplayModeGql,
    { client }
  );

  queryLaunchesPerYear: ApolloQueryControllerI = new ApolloQueryController(
    this,
    LaunchesPerYearGql,
    { client }
  );

  // eslint-disable-next-line class-methods-use-this
  handleDisplayMode(event: Event) {
    const mode: DisplayMode = (event.target as HTMLButtonElement).dataset
      .displayMode as DisplayMode;

    displayModeVar(
      Object.values(DisplayMode).includes(mode) ? mode : DisplayMode.TABLE
    );
  }

  render() {
    return html`
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
      <main>${this.renderCurrentView()}</main>
    `;
  }

  private renderCurrentView() {
    const data: Array<ChartData> =
      // @ts-ignore
      this.queryLaunchesPerYear.data.launchesPerYear;

    // @ts-ignore
    switch (this.queryDisplayMode.data.displayMode) {
      case DisplayMode.BAR:
        return lazyLoad(
          import('./ChartBar'),
          html` <display-chart-bar .data="${data}"></display-chart-bar> `
        );
      case DisplayMode.PIE:
        return lazyLoad(
          import('./ChartPie'),
          html` <display-chart-pie .data="${data}"></display-chart-pie> `
        );
      default:
        return lazyLoad(
          import('./Table'),
          html` <display-table .data="${data}"></display-table> `
        );
    }
  }
}
