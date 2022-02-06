import { resolve } from 'path'
import { fileURLToPath } from 'url'
import { defineNuxtModule, addPlugin } from '@nuxt/kit'

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
    // if (options.addPlugin) {
    const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url))
    nuxt.options.build.transpile.push(runtimeDir)
    addPlugin(resolve(runtimeDir, 'plugin'))
    // }
  }
})
