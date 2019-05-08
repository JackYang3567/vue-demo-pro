<template>
    <div class="login segments-page2">
        <div class="container">
            <div class="section-title">
                <h3>Sign In</h3>
            </div>
            <form>
                
                <input type="email" placeholder="Email">
                <input type="password" placeholder="password">
                <input type="text" placeholder="Captcha"> 
                <img :src="signin_captcha" />
                <div class="info">
                    <ul>
                        <li>
                            Don't have an account?
                            <a href="/signup">Create Account</a>
                        </li>
                        <li>
                            <a href="/forgot-password">Forgot Your Password</a>
                        </li>
                    </ul>
                </div>
                <button class="button"><i class="fab fa-telegram-plane"></i>Sign In</button>
            </form>
        </div>
    </div>

</template>
<script>
import {SIGNIN_CAPTCHA} from '../../config.json'
export default {
 data () {
    return {
      signin_captcha: SIGNIN_CAPTCHA
    }
  },
  computed: mapState({
    users: state => state.users.users
  }),
  created () {
    this.$store.dispatch('users/getAllUsers')
  }
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
</style>
