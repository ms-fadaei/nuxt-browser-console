# nuxt-browser-logger

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Github Actions CI][github-actions-ci-src]][github-actions-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href]

> {{ description }}

[📖 **Release Notes**](./CHANGELOG.md)

## Setup

1. Add `nuxt-browser-logger` dependency to your project

```bash
yarn add nuxt-browser-logger # or npm install nuxt-browser-logger
```

2. Add `nuxt-browser-logger` to the `modules` section of `nuxt.config.js`

```js
{
  modules: [
    // Simple usage
    'nuxt-browser-logger',

    // With options
    ['nuxt-browser-logger', { /* module options */ }]
  ]
}
```

## Development

1. Clone this repository
2. Install dependencies using `yarn install` or `npm install`
3. Start development server using `npm run dev`

## License

[MIT License](./LICENSE)

Copyright (c) Mohammad Saleh Fadaei (@ms.fadaei1997)

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/nuxt-browser-logger/latest.svg
[npm-version-href]: https://npmjs.com/package/nuxt-browser-logger

[npm-downloads-src]: https://img.shields.io/npm/dt/nuxt-browser-logger.svg
[npm-downloads-href]: https://npmjs.com/package/nuxt-browser-logger

#[github-actions-ci-src]: https://github.com/{{ github }}/workflows/ci/badge.svg
#[github-actions-ci-href]: https://github.com/{{ github }}/actions?query=workflow%3Aci

#[codecov-src]: https://img.shields.io/codecov/c/github/{{ github }}.svg
#[codecov-href]: https://codecov.io/gh/{{ github }}

[license-src]: https://img.shields.io/npm/l/nuxt-browser-logger.svg
[license-href]: https://npmjs.com/package/nuxt-browser-logger
