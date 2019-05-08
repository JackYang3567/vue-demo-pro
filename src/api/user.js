
/**
 * Created at 2019-04-09
 * Author: Jack
 */

const axios = require('axios');
const config = require('../../config.json')
const API = `${config.AIP_PREFIX}/user`

console.log("API==",API)
 let resUsers = []   
  /* // fetch是成功的   res里就是数据
   fetch(`${API}`)
      .then(res => res.json()).then((res) => {
        resUsers = res.data.rows
        //  commit('setUsers', res.data.rows)
      }).then(function(err) {
          console.log(err)
  })
 */

 // axios是response.data里才是数据
    axios.get(`${API}`)
      .then(function (res) {
        // handle success
        console.log("res.data====>",res.data)
        resUsers = res.data.data.rows;
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });

  export default {
    getUsers (cb) {
      setTimeout(() => cb(resUsers), 10)
    }
  }
  

 