import { ApolloQueryController } from '@apollo-elements/core';
import { LitElement, html } from 'lit';

import { customElement } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

// @ts-ignore
import LaunchesPast from './LaunchesPast.query.graphql';

@customElement('provider-query')
export class ProviderQuery extends LitElement {
  query = new ApolloQueryController(this, LaunchesPast, {
    variables: {
      limit: 3,
    },
  });

  render() {
    console.log(this.query.data);

    return html`
      <h2>ProviderQuery</h2>
      <article class=${classMap({ skeleton: this.query.loading })}>
        <p id="error" ?hidden=${!this.query.error}>
          ${this.query.error?.message}
        </p>
        <ul>
          ${
            // @ts-ignore
            this.query.data?.launchesPast?.map(
              (launch: any) => html` <li>${launch.mission_name}</li> `
            )
          }
        </ul>
      </article>
    `;
  }
}
