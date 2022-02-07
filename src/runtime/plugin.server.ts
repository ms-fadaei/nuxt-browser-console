/* eslint-disable import/no-duplicates */
import { defineNuxtPlugin, useHydration } from '#app'
import ConsoleReporter from './helpers/console-reporter'

// get the options out using lodash templates
const options = JSON.parse('<%= JSON.stringify(options) %>')
// extract the namespace from the options
const { namespace } = options

export default defineNuxtPlugin(() => {
  // mock console API for server side
  const $console = new ConsoleReporter()

  // store the reports in the nuxt global object
  // we don't need pass hydration set method in server plugin
  useHydration('nuxt-browser-console', () => $console._reports, () => undefined)

  return {
    provide: {
      [namespace]: $console
    }
  }
})
