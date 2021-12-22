import {
  ApolloClient,
  InMemoryCache,
  makeVar,
  ReactiveVar,
} from '@apollo/client/core';
import { DisplayMode } from './types.js';

// @ts-ignore
export const displayModeVar: ReactiveVar<DisplayMode> = makeVar(
  DisplayMode.TABLE
);

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        displayMode: {
          read() {
            return displayModeVar();
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
