// plugins/helpers/console.js
// functions to get, add and remove the logs to/from the store

// mini function to handle if no store, or no store module
// with our namespace exists
const storeModuleExists = ({ state, namespace }) => {
  if (!state || !state[namespace]) {
    // eslint-disable-next-line no-console
    console.error(`${namespace} nuxt module error: store not initialized`)
    return false
  } else {
    return true
  }
}

// function to return the current value of the logs
export const value = ({ state, namespace }) => {
  // handle no store:
  if (!storeModuleExists({ state, namespace })) { return undefined }
  // return the counter vale from the store
  return state[namespace].logArray
}

// functions to adjust the counter
export const push = ({ state, store, namespace }, type, ...args) => {
  // handle no store:
  if (!storeModuleExists({ state, namespace })) { return undefined }

  // push the message to store state
  return store.dispatch(`${namespace}/addLog`, {
    type,
    args
  })
}

// functions to adjust the counter
export const empty = ({ state, store, namespace }) => {
  // handle no store:
  if (!storeModuleExists({ state, namespace })) { return undefined }

  // remove logs from store state
  const _interval = setInterval(() => {
    if (store.dispatch(`${namespace}/removeLogs`)) {
      clearInterval(_interval)
    }
  }, 200)
}
