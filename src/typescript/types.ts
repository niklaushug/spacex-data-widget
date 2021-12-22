import { ApolloQueryController } from '@apollo-elements/core';
import { DocumentNode } from '@apollo/client';
import { OperationVariables } from '@apollo/client/core';

export interface ChartData {
  name: string;
  y: unknown; // TODO Why is this unknown?
}

// eslint-disable-next-line no-shadow
export enum DisplayMode {
  BAR = 'bar',
  PIE = 'pie',
  TABLE = 'table',
}

export interface LaunchPastI {
  // eslint-disable-next-line camelcase
  mission_name: string;
  year: string;
}

export interface LaunchesPastI {
  launchesPast: LaunchPastI[];
}

export type ApolloQueryControllerI = ApolloQueryController<
  DocumentNode,
  { [key: string]: any } | OperationVariables
>;
