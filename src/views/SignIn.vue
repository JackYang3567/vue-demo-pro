<template>
    <div class="login segments-page2">
        <div class="container">
         
            <div class="section-title">
                <h3>Sign In</h3>
            </div>
            <form>
                
                <input type="email" placeholder="Email">
                <input type="password" placeholder="password">
                <input type="text" placeholder="Captcha" :style="{width: '50%'}"> 
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
                <button class="button" type="button" @click="signin"><i class="fab fa-telegram-plane"></i>Sign In</button>
            </form>
            
        </div>
    </div>

</template>
<script>
import { mapState } from 'vuex'
import {SIGNIN_CAPTCHA} from '../../config.json'
export default {
 data () {
    return {
      
      signin_captcha: `${SIGNIN_CAPTCHA}?t=${Math.random()}`,
    
    }
  },
  computed: mapState({
    users: state => state.users.users
  }),
  created () {
    this.$store.dispatch('users/getAllUsers')
  },
  methods: {
      signin: function () { 
      alert('signin')
      this.$store.dispatch('auth/loginAction')
      //this.$router.push({name:'home'})
      window.location.href = '/'
  
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
