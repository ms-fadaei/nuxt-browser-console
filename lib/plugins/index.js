// plugins/index.js
import * as helpers from './helpers/console.js'

// get the options out using lodash templates
const options = JSON.parse('<%= JSON.stringify(options) %>')
// extract the namespace from the options
const { namespace } = options

// create the plugin
export default function (context, inject) {
  const { store } = context
  const { state } = store

  const showLog = (type, ...args) => {
    // eslint-disable-next-line no-console
    console[type](...args)
  }

  const log = (type, ...args) => {
    if (process.server) {
      helpers.push({ state, store, namespace }, type, ...args)
    } else {
      showLog(type, ...args)
    }
  }

  if (process.client) {
    helpers.value({ state, namespace }).forEach(log => showLog(log.type, ...log.args))
    helpers.empty({ state, store, namespace })
  }

  inject(namespace, log)
}
