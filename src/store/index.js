import Vue from 'vue'
import Vuex from 'vuex'

import cart from './modules/cart'
import products from './modules/products'
import sliders from './modules/slider'
import users from './modules/users'
import createLogger from '../plugins/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    cart,
    products,
    sliders,
    users
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
