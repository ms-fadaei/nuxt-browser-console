import { resolve } from 'path'

export default {
  rootDir: resolve(__dirname, '..'),
  buildDir: resolve(__dirname, '.nuxt'),
  srcDir: __dirname,
  modules: [resolve(__dirname, '../lib/module.js')]
}
