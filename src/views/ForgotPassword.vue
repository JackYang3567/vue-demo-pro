<template>
    <div class="forgot-password segments-page">
        <div class="container">
            <div class="content">
                <div class="icon">
                    <i class="fas fa-unlock-alt"></i>
                </div>
                <h4>Reset your password</h4>
                <p>Consectetur adipisicing elit. Odit, tempore.</p>
                <form>
                    <input type="text" placeholder="Your Email">
                    <button class="button waves-effect waves-light" @click="restPass">Reset Password</button>
                </form>
            </div>
        </div>
    </div>

</template>

<script>
import { mapState } from 'vuex'
//import {SIGNIN_CAPTCHA} from '../../config.json'
export default {
 data () {
    return {
      
      //signin_captcha: `${SIGNIN_CAPTCHA}?t=${Math.random()}`,
    
    }
  },
  computed: mapState({
    users: state => state.users.users
  }),
  created () {
    //this.$store.dispatch('users/getAllUsers')
  },
  methods: {
      restPass: function () { 
      alert('restPass')
      //this.$store.dispatch('auth/loginAction')
      this.$router.push({name:'signin'})
     
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
