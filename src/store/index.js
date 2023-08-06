import { createStore } from 'vuex'

export default createStore({
  state: {
    products: []
  },
  getters: {
    PRODUCTS (state) {
      return state.products
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
