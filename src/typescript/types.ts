import { ApolloQueryController } from '@apollo-elements/core';
import { DocumentNode } from '@apollo/client';
import { OperationVariables } from '@apollo/client/core';

export type ApolloQueryControllerI = ApolloQueryController<
  DocumentNode,
  { [key: string]: any } | OperationVariables
>;

export type CustomEventValueChangedDetails = {
  key: String;
  value: Number | String;
};

export interface CustomEventValueChanged extends CustomEvent {
  detail: CustomEventValueChangedDetails;
}
