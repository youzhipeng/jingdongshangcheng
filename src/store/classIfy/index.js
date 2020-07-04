export default {
    namespaced: true,
    state: {
        arrs: {}
    },
    getters: {},
    mutations: {
        mutList(state, payload) {
            state.arrs[payload.idx] = payload.val
        }
    },
    actions: {}
}
// export default classy