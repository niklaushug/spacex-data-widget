import {
  ApolloClient,
  InMemoryCache,
  makeVar,
  ReactiveVar,
} from '@apollo/client/core';
import { DisplayMode } from './types.js';
import { prepareDataForCharts } from './aggregateData.js';

// @ts-ignore
export const displayModeVar: ReactiveVar<DisplayMode> = makeVar(
  DisplayMode.TABLE
);

export const launchesPerYearVar: ReactiveVar<any> = makeVar([]);

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        displayMode: {
          read() {
            return displayModeVar();
          },
        },
        launchesPast: {
          merge(existing = [], incoming) {
            // TODO Merge or replacement?
            const merged = [...existing, ...incoming];
            // @ts-ignore
            launchesPerYearVar(prepareDataForCharts(merged));
            return merged;
          },
        },
        launchesPerYear: {
          read() {
            return launchesPerYearVar();
          },
        },
      },
    },
  },
});

export const client = new ApolloClient({
  uri: 'https://api.spacex.land/graphql/',
  cache,
});

window.__APOLLO_CLIENT__ = client;
