// module.js
const { resolve, join } = require('path')
const { readdirSync } = require('fs')

export default function (moduleOptions) {
  // get all options for the module
  const options = {
    ...moduleOptions,
    ...this.options.windowConsole
  }

  // expose the namespace / set a default
  if (!options.namespace) { options.namespace = 'console' }
  const { namespace } = options

  // add all of the initial plugins
  const pluginsToSync = [
    'store/index.js',
    'plugins/index.js'
  ]
  for (const pathString of pluginsToSync) {
    this.addPlugin({
      src: resolve(__dirname, pathString),
      fileName: join(namespace, pathString),
      options
    })
  }

  // sync all of the files and folders to relevant places in the nuxt build dir (.nuxt/)
  const foldersToSync = ['store/modules', 'plugins/helpers']
  for (const pathString of foldersToSync) {
    const path = resolve(__dirname, pathString)
    for (const file of readdirSync(path)) {
      this.addTemplate({
        src: resolve(path, file),
        fileName: join(namespace, pathString, file),
        options
      })
    }
  }
}
// module.exports.meta = require('../package.json')
