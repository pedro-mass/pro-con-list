export default {
    store: {
        state: {
            count: 25,
            user: {}
        },
        mutations: {
            increment(state) {
                state.count++
            }
        }
    }
}
