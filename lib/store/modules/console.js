// store/modules/console.js
export default {
  namespaced: true,
  state: () => ({
    logArray: []
  }),
  mutations: {
    ADD_LOG (state, log) {
      state.logArray.push(log)
    },
    REMOVE_LOGS (state) {
      state.logArray = []
    }
  },
  actions: {
    addLog ({ commit }, log) {
      commit('ADD_LOG', log)
    },
    removeLogs ({ commit }) {
      commit('REMOVE_LOGS')
    }
  }
}
