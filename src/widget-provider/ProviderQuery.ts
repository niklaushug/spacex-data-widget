import { ApolloQueryController } from '@apollo-elements/core';
import { LitElement, html } from 'lit';

import { customElement } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import LaunchesPast from './LaunchesPast.query.graphql';

interface MissionI {
  // eslint-disable-next-line camelcase
  mission_name: string;
}

interface LaunchesPastI {
  launchesPast: MissionI[];
}

@customElement('provider-query')
export class ProviderQuery extends LitElement {
  query = new ApolloQueryController(this, LaunchesPast, {
    variables: {
      limit: 5,
    },
  });

  render() {
    return html`
      <h2>ProviderQuery</h2>
      <article class=${classMap({ skeleton: this.query.loading })}>
        <p id="error" ?hidden=${!this.query.error}>
          ${this.query.error?.message}
        </p>
        <ul>
          ${(this.query.data as LaunchesPastI)?.launchesPast?.map(
            (launch: MissionI) => html` <li>${launch.mission_name}</li> `
          )}
        </ul>
      </article>
    `;
  }
}
