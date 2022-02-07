import { defineNuxtPlugin, useHydration } from '#app'

// get the options out using lodash templates
const options = JSON.parse('<%= JSON.stringify(options) %>')
// extract the namespace from the options
const { namespace } = options

export default defineNuxtPlugin(() => {
  // retrieve the reports from the nuxt global object
  // we don't need pass hydration get method in client plugin
  useHydration('nuxt-browser-console', () => undefined, (reports) => {
    reports.forEach((log) => {
      // eslint-disable-next-line no-console
      console[log.type](...log.args)
    })
  })

  return {
    provide: {
      [namespace]: window.console
    }
  }
})
