
import Cookie from 'vue-cookies'
const state = {
  loginName: Cookie.get('loginName'),
  token: Cookie.get('token')
}

// getters
const getters = {}

// actions
const actions = {}

// mutations
const mutations = {
  Login (state, user){
    state.loginName = user.email
    state.token = user.token
    //往cookie中写数据
    Cookie.set('loginName',user.email)
    Cookie.set('token',user.token)
  },
  LogOut (state){
    state.loginName = ""
    state.token = ""
    //往cookie中写数据
    Cookie.set('loginName',"")
    Cookie.set('token',"")
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
