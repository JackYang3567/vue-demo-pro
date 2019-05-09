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
  loginAction ({ commit },user) {
     // auth.getLoginedUser(user => {
        commit('changeLogin', user)
     
     // })
  },
  logoutAction ({ commit }) {
      commit('changeLogout', null)
}
}

// mutations
const mutations = {
  changeLogin (state, user) {
    console.log('to here===changeLogin===')
    if(user){
      console.log('to here===changeLogin=1111111==')
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
