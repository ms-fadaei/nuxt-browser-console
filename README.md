# nuxt-browser-console

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Github Actions CI][github-actions-ci-src]][github-actions-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href]

> show server-side & client-side logs/errors/warnings inside browser console <br>
> ⚠ WARNING: This package use vuex to store server-side logs ⚠

With this module, you can use console functions to show your message/data. No matter you are using this module inside the server-side or client-side events, the message is always shown in the browser console. This is good for monitoring server events on production (for example, Axios request and response inside asyncData function can be logged into the browser console).

[📖 **Release Notes**](./CHANGELOG.md)

## Setup

1. Make sure the store is active in your project ([see how](https://nuxtjs.org/docs/2.x/directory-structure/store/#activate-the-store))

2. Add `nuxt-browser-console` dependency with `yarn` or `npm` to your project

```bash
yarn add nuxt-browser-console # or npm install nuxt-browser-console
```

3. Add `nuxt-browser-console` to the `modules` section of `nuxt.config.js`

```js
{
  modules: [
    // Simple usage
    'nuxt-browser-console',

    // With options
    ['nuxt-browser-console', { /* module options */ }]
  ],
  browserConsole: {
    /* module options */
  }
}
```

## Options
Module default options:


| Option | Default | Description |
| ------ | ------- | ----------- |
| namespace | `console` | the handler of module. `this.$console(...)` or `app.$console(...)` |


```js
{
  browserConsole: {
    namespace: 'console'
  }
}
```

## Usage
You can simply use this module through `this` or context `app` inside plugins, components, pages and etc.

The first parameter is the function name that you want to use.
```js
  this.$console("log", ...args)
```

Here, there is an example to show some information about Axios response in the browser console (no matter server-side/client-side).
```js
export default function ({$axios, app}) {

  const style = "background: #d32f2f;border-radius: 0.5em;color: white;font-weight: bold;padding: 2px 0.5em;";

  $axios.interceptors.response.use((x) => {
    // console.groupCollapsed(`%cRequest to ${x.config.url.split("?")[0]}`, style)
    app.$console('groupCollapsed', `%cRequest to ${x.config.url.split("?")[0]}`, style);
    
    // console.info('URL:', `${x.config.baseURL}${x.config.url}`)
    app.$console('info', 'URL:', `${x.config.baseURL}${x.config.url}`);
    
    // console.info('Method:', x.config.method.toUpperCase())
    app.$console('info', 'Method:', x.config.method.toUpperCase());
    
    // console.info('Status:', `${x.statusText || 'OK'} (${x.status})`)
    app.$console('info', 'Status:', `${x.statusText || 'OK'} (${x.status})`);
    
    // console.groupEnd()
    app.$console('groupEnd');

    return x;
  });
}
```

## Development

1. Clone this repository
2. Install dependencies using `yarn install` or `npm install`
3. Start development server using `npm run dev`

## Todo

* [x] Complete README
* [x] Add test
* [x] Release first stable major version (v1.0.0)

## License

[MIT License](./LICENSE)

Copyright (c) Mohammad Saleh Fadaei ([@ms-fadaei](https://github.com/ms-fadaei))

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/nuxt-browser-console/latest.svg
[npm-version-href]: https://npmjs.com/package/nuxt-browser-console

[npm-downloads-src]: https://img.shields.io/npm/dt/nuxt-browser-console.svg
[npm-downloads-href]: https://npmjs.com/package/nuxt-browser-console

[github-actions-ci-src]: https://github.com/ms-fadaei/nuxt-browser-console/workflows/ci/badge.svg
[github-actions-ci-href]: https://github.com/ms-fadaei/nuxt-browser-console/actions?query=workflow%3Aci

[codecov-src]: https://img.shields.io/codecov/c/github/ms-fadaei/nuxt-browser-console.svg
[codecov-href]: https://codecov.io/gh/ms-fadaei/nuxt-browser-console

[license-src]: https://img.shields.io/npm/l/nuxt-browser-console.svg
[license-href]: https://npmjs.com/package/nuxt-browser-console
