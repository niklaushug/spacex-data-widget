import { ApolloQueryController } from '@apollo-elements/core';
import { LitElement, html } from 'lit';

import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import { LaunchesPastI, MissionI } from '../types.js';

import LaunchesPastGql from './LaunchesPast.query.graphql';

@customElement('provider-query')
export class ProviderQuery extends LitElement {
  @property({ type: Object })
  filters = {
    limit: 5,
    missionName: '',
  };

  @property({ type: Number })
  set limit(limit: number) {
    this.filters.limit = limit;
    if (this.query.data) {
      this.query.refetch({ ...this.filters });
    }
  }

  @property({ type: String })
  set missionName(missionName: string) {
    this.filters.missionName = missionName;
    if (this.query.data) {
      this.query.refetch({ ...this.filters });
    }
  }

  query = new ApolloQueryController(this, LaunchesPastGql, {
    variables: {
      ...this.filters,
    },
  });

  render() {
    return html`
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
