// module.js
const { resolve, join } = require('path')

export default function (moduleOptions) {
  // get all options for the module
  const options = {
    ...moduleOptions,
    ...this.options.browserConsole
  }

  // expose the namespace / set a default
  if (!options.namespace) {
    options.namespace = 'console'
  }
  const { namespace } = options

  // add all of the initial plugins
  const pluginsToSync = ['plugins/index.js']
  for (const pathString of pluginsToSync) {
    this.addPlugin({
      src: resolve(__dirname, pathString),
      fileName: join(namespace, pathString),
      options
    })
  }
}
// module.exports.meta = require('../package.json')
