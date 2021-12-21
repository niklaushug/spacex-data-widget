import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import './DisplayChartBar.js';
import './DisplayChartPie.js';
import './DisplayMode.js';
import './DisplayTable.js';

@customElement('widget-display')
export class WidgetDisplay extends LitElement {
  render() {
    return html`
      <p>WidgetDisplay</p>
      <display-mode></display-mode>
      <display-table></display-table>
      <display-chart-bar></display-chart-bar>
      <display-chart-pie></display-chart-pie>
    `;
  }
}
