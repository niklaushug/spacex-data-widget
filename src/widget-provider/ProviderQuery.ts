import { ApolloQueryController } from '@apollo-elements/core';
import { LitElement } from 'lit';

import { customElement, property } from 'lit/decorators.js';

import LaunchesPast from '../graphql/LaunchesPast.query.graphql';
import { LaunchesPastQueryVariables } from '../typescript/generated-types';
import { ApolloQueryControllerI } from '../typescript/types';

@customElement('provider-query')
export class ProviderQuery extends LitElement {
  @property({ type: Object })
  filters: LaunchesPastQueryVariables = {
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

  query: ApolloQueryControllerI = new ApolloQueryController(
    this,
    LaunchesPast,
    {
      variables: {
        ...this.filters,
      },
    }
  );
}
