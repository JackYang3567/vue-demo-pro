import user from '../../api/user'

// initial state
const state = {
  users: []
}

// getters
const getters = {}

// actions
const actions = {
  getAllUsers ({ commit }) {
    user.getUsers(users => {
      commit('setUsers', users)
    })
  /* 这种方式也是成功的
   fetch("http://192.168.33.10:7001/api/user")
   .then(res => res.json()).then((res) => {
       console.log("===>",res.data.users)
       commit('setUsers', res.data.users)
   }).then(function(err) {
       console.log(err)
   })
   */  
  }
}

// mutations
const mutations = {
  setUsers (state, users) {
    state.users = users
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
