//import auth from '../../api/auth'
// initial state
const state = {
  isLogin: false,
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
  },
  logoutAction ({ commit }) {
      commit('changeLogout', null)
}
}

// mutations
const mutations = {
  changeLogin (state, user) {
    if(user.id){
        state.isLogin = true
        state.MyProfile = user
    }
  },
  changeLogout (state, user) {
    if(!user){
        state.isLogin = false
        state.MyProfile = null
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
