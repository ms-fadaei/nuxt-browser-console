// get the options out using lodash templates
const options = JSON.parse('<%= JSON.stringify(options) %>')
// extract the namespace from the options
const { namespace } = options

// create the plugin
export default function (context, inject) {
  // const { store } = context
  const { beforeNuxtRender } = context
  // const { state } = store

  const showLog = (type, ...args) => {
    // eslint-disable-next-line no-console
    console[type](...args)
  }

  // eslint-disable-next-line no-var
  var logger

  if (process.server) {
    const logs = []

    logger = (type, ...args) => {
      logs.push({
        type,
        args
      })
    }

    beforeNuxtRender((context) => {
      context.nuxtState.serverLogs = logs
    })
  } else {
    if (typeof window !== 'undefined' && window.__NUXT__?.serverLogs) {
      window.__NUXT__?.serverLogs.forEach(log => showLog(log.type, ...log.args))
    }

    logger = (type, ...args) => {
      showLog(type, ...args)
    }
  }

  context[`$${namespace}`] = logger
  inject(namespace, logger)
}
