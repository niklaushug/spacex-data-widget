import { html, LitElement, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import { DirectiveResult } from 'lit-html/directive';
import { ApolloQueryController } from '@apollo-elements/core';

import { lazyLoad } from '../helpers/lazyLoadDirective';
import { ApolloQueryControllerI } from '../typescript/types';
import {
  ChartData,
  DisplayMode as DisplayModeEnum,
  LaunchesPerYearQuery,
} from '../typescript/generated-types';
import { client, displayModeVar } from '../apollo';

import DisplayModeQuery from '../graphql/DisplayMode.query.graphql';
import LaunchesPerYear from '../graphql/LaunchesPerYear.query.graphql';

@customElement('widget-display')
export class WidgetDisplay extends LitElement {
  queryDisplayMode: ApolloQueryControllerI = new ApolloQueryController(
    this,
    DisplayModeQuery,
    { client }
  );

  queryLaunchesPerYear: ApolloQueryControllerI = new ApolloQueryController(
    this,
    LaunchesPerYear,
    { client }
  );

  static handleDisplayMode(event: Event): void {
    const mode: DisplayModeEnum = (event.target as HTMLButtonElement).dataset
      .displayMode as DisplayModeEnum;

    displayModeVar(
      Object.values(DisplayModeEnum).includes(mode)
        ? mode
        : DisplayModeEnum.Table
    );
  }

  render(): TemplateResult {
    return html`
      <button
        @click="${WidgetDisplay.handleDisplayMode}"
        data-display-mode="${DisplayModeEnum.Table}"
      >
        Table
      </button>
      <button
        @click="${WidgetDisplay.handleDisplayMode}"
        data-display-mode="${DisplayModeEnum.Bar}"
      >
        Bar Chart
      </button>
      <button
        @click="${WidgetDisplay.handleDisplayMode}"
        data-display-mode="${DisplayModeEnum.Pie}"
      >
        Pie Chart
      </button>
      <main>${this.renderCurrentView()}</main>
    `;
  }

  private renderCurrentView(): DirectiveResult {
    const data: ChartData = (
      this.queryLaunchesPerYear.data as LaunchesPerYearQuery
    ).launchesPerYear;

    // @ts-ignore
    switch (this.queryDisplayMode.data.displayMode) {
      case DisplayModeEnum.Bar:
        return lazyLoad(
          import('./ChartBar'),
          html` <display-chart-bar .data="${data}"></display-chart-bar> `
        );
      case DisplayModeEnum.Pie:
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
