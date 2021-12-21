declare module '*.graphql' {
  import { DocumentNode } from '@apollo/client/core';

  const defaultDocument: DocumentNode;
  export default defaultDocument;
}
