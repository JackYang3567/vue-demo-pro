<template>
    <div class="login segments-page2">
        <div class="container">
         
            <div class="section-title">
                <h3>Sign In</h3>
            </div>
            <form @submit.prevent="signin">
                
                <input type="email" placeholder="Email" 
                       v-model.trim="signinFormData.email" />
                <input type="password" placeholder="password" 
                       v-model.trim="signinFormData.password" />
                <input type="text" placeholder="Captcha" 
                       v-model.trim="signinFormData.captcha"
                      :style="{width: '50%'}" /> 
                <img :src="signin_captcha" @click="getCaptcha" class="img-captcha"/>
               
                <div class="info">
                    <ul>
                        <li>
                           <span>请填写图片中的字符，不区分大小写          
                             <a href="#" @click="getCaptcha" >看不清楚？换张图片 </a> 
                           </span>
                        </li>
                        <li>&nbsp;</li>
                        <li>
                            Don't have an account?
                            <router-link to="/signup">Create Account</router-link>
                        </li>
                        <li>
                            <router-link to="/forgot-password">Forgot Your Password</router-link>
                        </li>
                    </ul>
                </div>
                <button class="button" type="submit" ><i class="fab fa-telegram-plane"></i>Sign In</button>
            </form>
            
        </div>
    </div>

</template>
<script>

import { mapState,mapActions,mapMutations } from 'vuex'
import {AIP_PREFIX,SIGNIN_CAPTCHA} from '../../config.json'
import axios from 'axios';

const API = `${AIP_PREFIX}/user/signin`
let self = this;
export default {
 data () {
    return {      
      signin_captcha: `${SIGNIN_CAPTCHA}?t=${Math.random()}`,
      signinFormData: {type: 1,},
    
    }
  },
  computed: mapState({
    //users: state => state.users.users
  }),
  created () {
    //this.$store.dispatch('users/getAllUsers')
    self = this;
  },
  methods: {
     ...mapActions('auth',[ 'loginAction' ]),
    ...mapMutations('auth',[ 'Login' ]),
      signin: function () { 
          let formData = JSON.stringify(this.signinFormData);
          console.log("signinFormData===",this.signinFormData)
          alert('signin==='+ formData )

          // axios是response.data里才是数据
          axios.post(`${API}`,this.signinFormData)
          .then(function (res) {
            // handle success
            console.log("API ===res.data.data====>",res.data.data)
            // resUsers = res.data.data.rows;
            //self.$store.dispatch('auth/loginAction')
           // self.loginAction(res.data.data)
            self.Login(res.data.data)
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
          .then(function () {
            // always executed
          });
        window.location.href = '/'
       // this.$router.push({name:'home'})
    },
    getCaptcha: function () { 
      this.signin_captcha =  `${SIGNIN_CAPTCHA}?t=${Math.random()}`
    },
    
  },
}
</script>

<style scoped>
  .login {
    min-height: 600px;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }
  .input-captcha {
    width: 30%;
  }
  .img-captcha{

    height: 34px;
    border-radius: 5px;
    margin-left: 55%;
    margin-top: -54px;
    margin-bottom: 10px;
  }
</style>
