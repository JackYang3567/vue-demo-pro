<template>
  <div class="register segments-page2">
        <div class="container">
            <div class="section-title">
                <h3>Sign Up</h3>
            </div>
            <form @submit.prevent="signUp">
                <input type="text" placeholder="Full Name"
                       v-model.trim="signupFormData.name" />
                <input type="text" placeholder="Username"
                       v-model.trim="signupFormData.username" />
                <input type="email" placeholder="Email"
                       v-model.trim="signupFormData.email" />
                <input type="password" placeholder="password" 
                       v-model.trim="signupFormData.password" />
                <input type="password" placeholder="Retype Password" 
                       v-model.trim="signupFormData.repassword" />
                <input type="text" placeholder="Captcha"
                       v-model.trim="signinFormData.captcha" 
                       :style="{width: '50%'}" /> 
                <img :src="signup_captcha" @click="getCaptcha" class="img-captcha"/>
                <div class="info">
                    <ul>
                       <li>
                           <span>请填写图片中的字符，不区分大小写          
                             <a href="#" @click="getCaptcha" >看不清楚？换张图片 </a> 
                           </span>
                        </li>
                        <li>&nbsp;</li>
                        <li>
                            Have an account?
                            <router-link to="/signin">Sign In</router-link>
                        </li>
                    </ul>
                </div>
                <button class="button" type="submit" ><i class="fab fa-telegram-plane"></i>Sign Up</button>
            </form>
        </div>
    </div>

</template>

<script>
import { mapState } from 'vuex'
import {AIP_PREFIX,SIGNUP_CAPTCHA} from '../../config.json'
import axios from 'axios';
const API = `${AIP_PREFIX}/user/signup`
export default {
 data () {
    return {
      signup_captcha: `${SIGNUP_CAPTCHA}?t=${Math.random()}`,
      signupFormData: {type: 0,},
    }
  },  
  methods: {
    ...mapActions([
      'loginAction'
    ]),
    signUp: function () { 
       let formData = JSON.stringify(this.signupFormData);
      console.log("signupFormData===",this.signupFormData)
      alert('signin==='+ formData )
        console.log("API=======>",API)
      axios.post(`${API}`,this.signupFormData)
        .then(function (res) {
          // handle success
          console.log("API ===res.data====>",res.data)
         // resUsers = res.data.data.rows;
         this.loginAction(res.data.data)
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });
      this.$router.push({name:'signin'})
    },

    getCaptcha: function () { 
      this.signup_captcha =  `${SIGNUP_CAPTCHA}?t=${Math.random()}`
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

