import { ApolloQueryController } from '@apollo-elements/core';
import { LitElement } from 'lit';

import { customElement, property } from 'lit/decorators.js';

import LaunchesPastGql from '../graphql/LaunchesPast.query.graphql';

@customElement('provider-query')
export class ProviderQuery extends LitElement {
  @property({ type: Object })
  filters = {
    limit: 50,
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
}
