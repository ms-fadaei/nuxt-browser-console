import { resolve, join } from 'path'
import { fileURLToPath } from 'url'
import { readdirSync } from 'fs'
import { defineNuxtModule, addPluginTemplate, addTemplate } from '@nuxt/kit'

export interface ModuleOptions {
  namespace: string
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-browser-console',
    configKey: 'browserConsole'
  },
  defaults: {
    namespace: 'console'
  },
  setup (options, nuxt) {
    const { namespace } = options

    // transpile runtime directories
    const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url))

    // add all of the initial plugins
    const pluginsToSync = ['plugin.server.ts', 'plugin.client.ts']

    for (const pathString of pluginsToSync) {
      addPluginTemplate({
        src: resolve(runtimeDir, pathString),
        filename: join(namespace, pathString),
        options
      })
    }

    // sync all of the files and folders to relevant places in the nuxt build dir (.nuxt/)
    const foldersToSync = ['helpers']
    for (const pathString of foldersToSync) {
      const path = resolve(runtimeDir, pathString)
      for (const file of readdirSync(path)) {
        addTemplate({
          src: resolve(path, file),
          filename: join(namespace, pathString, file)
        })
      }
    }
  }
})
