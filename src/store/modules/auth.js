//import auth from '../../api/auth'
// initial state
const state = {
  isLogin: 0,
  MyProfile: {}
}

// getters
const getters = {}

// actions
const actions = {
  loginAction ({ commit }) {
      //auth.getLoginedUser(user => {
        commit('changeLogin', {id:1})
     // })
    }
}

// mutations
const mutations = {
  changeLogin (state, user) {
    if(user.id){
        state.isLogin = 1
        state.MyProfile = user
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
