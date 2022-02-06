import { defineNuxtPlugin, useHydration } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  let $console
  if (process.server) {
    $console = new ServerConsole()
  } else {
    $console = console
  }

  useHydration('nuxt-browser-console', () => JSON.stringify($console.reports), (json) => {
    JSON.parse(json).forEach((log) => {
      $console[log.type](...log.args)
    })
  })

  return {
    provide: {
      console: $console
    }
  }
})

class ServerConsole {
  #reports

  #addReport (type, ...args) {
    this.#reports.push({
      type,
      args
    })
  }

  constructor (reports = []) {
    this.#reports = reports
  }

  get reports () {
    return this.#reports
  }

  clear () {
    this.#reports = []
  }

  log (...args) {
    this.#addReport('log', ...args)
  }

  warn (...args) {
    this.#addReport('warn', ...args)
  }

  error (...args) {
    this.#addReport('error', ...args)
  }

  info (...args) {
    this.#addReport('info', ...args)
  }

  groupCollapsed (...args) {
    this.#addReport('groupCollapsed', ...args)
  }

  groupEnd () {
    this.#addReport('groupEnd')
  }
}
