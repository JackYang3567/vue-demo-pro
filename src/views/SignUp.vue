<template>
  <div class="register segments-page2">
        <div class="container">
            <div class="section-title">
                <h3>Sign Up</h3>
            </div>
            <form>
                <input type="text" placeholder="Full Name">
                <input type="text" placeholder="Username">
                <input type="email" placeholder="Email">
                <input type="password" placeholder="password">
                <input type="password" placeholder="Retype Password">
                <input type="text" placeholder="Captcha" :style="{width: '50%'}"> 
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
                <button class="button" type="button" @click="signUp"><i class="fab fa-telegram-plane"></i>Sign Up</button>
            </form>
        </div>
    </div>

</template>

<script>
import { mapState } from 'vuex'
import {SIGNUP_CAPTCHA} from '../../config.json'
export default {
 data () {
    return {
      signup_captcha: `${SIGNUP_CAPTCHA}?t=${Math.random()}`,
    }
  },  
  methods: {
    signUp: function () { 
      alert('signup')
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

