
/**
 * Created at 2019-04-09
 * Author: Jack
 */

const axios = require('axios');
const config = require('../../config.json')
let _users = [
           
        {"id":100,"email":"dfsdfgsd@163.com","password":"$2b$10$E75sf8OPxPKkmt7L9pz2y.j7CdxEzUmvx8RFNK7hPy0hG0I71DHZK","username":"fsadfsdf",
                    "nickname":null,"birthday":null,"tel":null,"gender":0,"mobile_phone":null,"address":null,"status":0,"weibo":"","weixin":"","receive_remote":null,
                     "email_verifyed":null,"avatar":"","created_at":"2019-04-12T09:50:21.851Z","updated_at":"2019-04-12T09:59:33.909Z"},
                  {"id":99,"email":"bersertrer@163.com","password":"$2b$10$BNxVu89bcBOUXxL3tPpOIeG601Z1W6feEpyjiCTUGjZ8Clp6COk02","username":"admbersertrerin8",
                  "nickname":"jackyant","birthday":null,"tel":null,"gender":1,"mobile_phone":"13804563567","address":"星光路7号","status":0,"weibo":"","weixin":"",
                  "receive_remote":null,"email_verifyed":null,"avatar":"","created_at":"2019-04-12T08:50:58.399Z","updated_at":"2019-04-12T10:00:42.525Z"},
                  {"id":98,"email":"qidkerew@163.com","password":"$2b$10$6Mo1MPBwWuBGBibI3.eb/Oh.RcaPuNGTnxn0X/XlTa.G0J34GPrI6","username":"qidkerew",
                  "nickname":null,"birthday":null,"tel":null,"gender":1,"mobile_phone":"13703333567","address":"星光路7号","status":0,"weibo":"","weixin":"",
                  "receive_remote":null,"email_verifyed":null,"avatar":"","created_at":"2019-04-12T08:50:58.329Z","updated_at":"2019-04-12T08:50:58.329Z"},
                  {"id":97,"email":"batonere@163.com","password":"$2b$10$vHNpjfMn2wQjUMpttLx8Ve40Muth82TGyfnf.N5TzyMVlXeJfWuCy","username":"batonere",
                  "nickname":null,"birthday":null,"tel":null,"gender":1,"mobile_phone":"13608013222","address":"星光路6号","status":0,"weibo":"","weixin":"",
                  "receive_remote":null,"email_verifyed":null,"avatar":"","created_at":"2019-04-12T08:50:58.252Z","updated_at":"2019-04-12T08:50:58.252Z"},
                  {"id":96,"email":"trewrwerwf@163.com","password":"$2b$10$0wSBWblJd3O2/DEjYukjrOyQQnnq7glnojxqI/nd4itumKqAFrneK","username":"trewrwerwf",
                  "nickname":null,"birthday":null,"tel":null,"gender":1,"mobile_phone":"13508076567","address":"星光路5号","status":0,"weibo":"","weixin":"",
                  "receive_remote":null,"email_verifyed":null,"avatar":"","created_at":"2019-04-12T08:50:58.186Z","updated_at":"2019-04-12T08:50:58.186Z"},
                  {"id":95,"email":"vicjijer@163.com","password":"$2b$10$7muSBzHv33zRvXZz.65a/euLC7E4ZWcvddSsnUNxgI48LTr1xV6Qa","username":"vicjijer",
                  "nickname":null,"birthday":null,"tel":null,"gender":1,"mobile_phone":"13454013567","address":"星光路4号","status":0,"weibo":"","weixin":"",
                  "receive_remote":null,"email_verifyed":null,"avatar":"","created_at":"2019-04-12T08:50:58.121Z","updated_at":"2019-04-12T08:50:58.121Z"},
                  {"id":94,"email":"mnenrere@163.com","password":"$2b$10$8g5.uyLsKlxX/v48sOGEXeg0lL.5EdAq4Qw2CnB6SB.vackiorNAW","username":"mnenrere",
                  "nickname":null,"birthday":null,"tel":null,"gender":1,"mobile_phone":"13812313567","address":"星光路7号","status":0,"weibo":"","weixin":"",
                  "receive_remote":null,"email_verifyed":null,"avatar":"","created_at":"2019-04-12T08:50:58.056Z","updated_at":"2019-04-12T08:50:58.056Z"},
                  {"id":93,"email":"butoueerer@163.com","password":"$2b$10$JJjefJ8ZwQx4vTY5glXjiefkJxdaxVs7d0IG9v5FpmiNXklMCr10i","username":"butoueerer",
                  "nickname":null,"birthday":null,"tel":null,"gender":1,"mobile_phone":"13705893567","address":"星光路7号","status":0,"weibo":"","weixin":"",
                  "receive_remote":null,"email_verifyed":null,"avatar":"","created_at":"2019-04-12T08:50:57.987Z","updated_at":"2019-04-12T08:50:57.987Z"},
                  {"id":92,"email":"kilerer@163.com","password":"$2b$10$/jf15n4AduXLZixY1wu6.e7H68LjvPj2SpvcQD4mQZ657Rx2qEgx6","username":"kilerer",
                  "nickname":null,"birthday":null,"tel":null,"gender":1,"mobile_phone":"13603213567","address":"星光路6号","status":0,"weibo":"","weixin":"",
                  "receive_remote":null,"email_verifyed":null,"avatar":"","created_at":"2019-04-12T08:50:57.920Z","updated_at":"2019-04-12T08:50:57.920Z"},
                  {"id":91,"email":"jiangxiu@163.com","password":"$2b$10$bo22ddmABuuxSIeQrqz9B.vqp0OxZw.OacKOHwS8CVK92d/1ABcRq","username":"jiangxiu",
                  "nickname":null,"birthday":null,"tel":null,"gender":1,"mobile_phone":"13508034567","address":"星光路5号","status":0,"weibo":"","weixin":"",
                  "receive_remote":null,"email_verifyed":null,"avatar":"","created_at":"2019-04-12T08:50:57.852Z","updated_at":"2019-04-12T08:50:57.852Z"}
               
 ]

 // API='http:'//192.168.33.10:7001/api/user'
const API = `//${config.APIURL[0].domin}:${config.APIURL[0].port}/${config.APIURL[0].prefix}/user`
 let resUsers = []   
  /*  fetch是成功的   res里就是数据
   fetch(`${API}`)
      .then(res => res.json()).then((res) => {
        resUsers = res.data.users
        //  commit('setUsers', res.data.users)
      }).then(function(err) {
          console.log(err)
  })
 */

 // axios是response.data里才是数据
    axios.get(`${API}`)
      .then(function (response) {
        // handle success
       // console.log("response====>",response)
        resUsers = response.data.data.users;
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
  

 