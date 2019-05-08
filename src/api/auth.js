
/**
 * Created at 2019-04-29
 * Author: Jack
 */

const axios = require('axios');
const config = require('../../config.json')
const API = `${config.AIP_PREFIX}/signin`
 let userInfo = {}
 // axios是response.data里才是数据
    axios.get(`${API}`)
      .then(function (res) {
        // handle success
        console.log("res.data====>",res.data)
        userInfo = res.data.data.rows;
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });

  export default {
    getLoginedUser (cb) {
      setTimeout(() => cb(userInfo), 10)
    }
  }
  

 
