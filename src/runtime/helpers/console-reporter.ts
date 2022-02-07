import { format } from 'util'

class ConsoleReporter {
  _reports

  constructor (reports = []) {
    this._reports = reports
  }

  get reports () {
    return this._reports
  }

  _addReport (type, ...args) {
    this._reports.push({
      type,
      args: args.map(arg => format(arg))
    })
  }

  clear () {
    this._reports = []
  }

  log (...args) {
    this._addReport('log', ...args)
  }

  warn (...args) {
    this._addReport('warn', ...args)
  }

  error (...args) {
    this._addReport('error', ...args)
  }

  info (...args) {
    this._addReport('info', ...args)
  }

  groupCollapsed (...args) {
    this._addReport('groupCollapsed', ...args)
  }

  groupEnd () {
    this._addReport('groupEnd')
  }
}

export default ConsoleReporter
