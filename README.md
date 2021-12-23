## Data Widget

[![Built with open-wc recommendations](https://img.shields.io/badge/built%20with-open--wc-blue.svg)](https://github.com/open-wc)

## Setup and Usage

Run subsequent commands do download, build and test bundle.

* `git clone https://github.com/niklaushug/spacex-data-widget.git`
* `cd spacex-data-widget`
* `npm install`
* `npm run types`
* `npx copyfiles src/**/*.query.graphql out-tsc`
* `npm run build`
* `cd dist`
* `npx wds --open`

## Scripts

- `start` runs your app for development, reloading on file changes
- `start:build` runs your app after it has been built using the build command
- `build` builds your app and outputs it in your `dist` directory
- `lint` runs the linter for your project
- `format` format code
- `analyze`: generate custom element manifest
- `types` generate types from graphql schemas
