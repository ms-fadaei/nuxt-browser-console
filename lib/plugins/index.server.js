import ServerConsole from './helpers/server-console'

// get the options out using lodash templates
const options = JSON.parse('<%= JSON.stringify(options) %>')
// extract the namespace from the options
const { namespace } = options

// create the plugin
export default function (context, inject) {
  const { beforeNuxtRender } = context

  const serverConsole = new ServerConsole()

  beforeNuxtRender(({ nuxtState }) => {
    if (serverConsole.reports.length !== 0) {
      nuxtState.serverReports = JSON.stringify(serverConsole.reports)
    }
  })

  // attach logger to the context
  context[`$${namespace}`] = serverConsole
  inject(namespace, serverConsole)
}