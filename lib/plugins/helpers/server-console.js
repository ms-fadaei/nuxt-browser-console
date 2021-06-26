class ServerConsole {
  constructor() {
    this._reports = []
  }

  get reports() {
    return this._reports
  }

  _addReport(type, ...args) {
    this._reports.push({
      type,
      args: args || []
    })
  }

  clear() {
    this._reports = []
  }

  log(...args) {
    this._addReport('log', ...args)
  }

  warn(...args) {
    this._addReport('warn', ...args)
  }

  error(...args) {
    this._addReport('error', ...args)
  }

  info(...args) {
    this._addReport('info', ...args)
  }

  groupCollapsed(...args) {
    this._addReport('groupCollapsed', ...args)
  }

  groupEnd() {
    this._addReport('groupEnd')
  }
}

export default ServerConsole
