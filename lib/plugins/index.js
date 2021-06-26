// get the options out using lodash templates
const options = JSON.parse('<%= JSON.stringify(options) %>')
// extract the namespace from the options
const { namespace } = options

// create the plugin
export default function (context, inject) {
  const { beforeNuxtRender } = context

  // show logs in a simplest way
  const showLog = (type, ...args) => {
    // eslint-disable-next-line no-console
    console[type](...args)
  }

  // eslint-disable-next-line no-var
  var logger

  if (process.server) {
    // log storage on server side
    const logs = []

    // just store the logs on server side
    logger = (type, ...args) => {
      logs.push({
        type,
        args
      })
    }

    // add logs array to nuxt global object
    beforeNuxtRender(({ nuxtState }) => {
      nuxtState.serverLogs = logs
    })
  } else {
    // retrieve logs from nuxt global object
    if (typeof window !== 'undefined' && window.__NUXT__?.serverLogs) {
      window.__NUXT__.serverLogs.forEach((log) =>
        showLog(log.type, ...log.args)
      )
      delete window.__NUXT__.serverLogs
    }

    // immediately show the logs on client side (no need to store them)
    logger = (type, ...args) => {
      showLog(type, ...args)
    }
  }

  // attach logger to the context
  context[`$${namespace}`] = logger
  inject(namespace, logger)
}
