
<template>
    <div class="navbar">
        <div class="container">
            <div class="row">
                <div class="col s3">
                    <div class="content-left">
                        <a href="#slide-out" data-activates="slide-out" class="sidebar"><i class="fas fa-bars"></i></a>
                    </div>
                </div>
                <div class="col s6">
                    <div class="content-center">
                        <a href="/"><h1>My Demo</h1></a>
                    </div>
                </div>
                <div class="col s3">
                    <div class="content-right" v-if="loginName">
                        <!-- <a href="#modal">-->
                        <a href="#modal" class="modal-trigger">
                            <i class="fas fa-user"></i>
                        </a> 
                        &nbsp;  &nbsp;
                        <a href="#" @click="signout" title="Sign Out">
                            <i class="fas fa-sign-out-alt"></i>
                        </a>
                    </div>
                     <div class="content-right" v-else>
                         <router-link to="/signin" title="Sign In">
                            <i class="fas fa-sign-in-alt"></i>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import { mapState, mapMutations } from 'vuex'
let self = this;
export default {
  name: 'Headerbar',
 data () {
    return {
      loginName: this.$store.state.auth.loginName 
    }
  },
  computed:  mapState({
   // loginName: state => state.auth.loginName
   
  }),
  created () {
    self = this;   
   // this.$store.dispatch('auth/loginAction')
    this.loginName = this.$store.state.auth.loginName 
     console.log(' this.$store.state==',this.$store.state.auth)
  },
  methods: {
      ...mapMutations('auth',[ 'LogOut' ]),
      signout: function () { 
        self.LogOut()
        window.location.href = '/'
       // self.$router.push({name:'home'})
    }
  },
}

</script>

<style scoped>
.caret {
    display: inline-block;
    width: 0;
    color: #ffffff;
    height: 0;
    margin-left: 2px;
    vertical-align: middle;
    border-top: 4px dashed;
    border-top: 4px solid\9;
    border-right: 4px solid transparent;
    border-left: 4px solid transparent;
}
.dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 1000;
    display: none;
    float: left;
    min-width: 160px;
    padding: 5px 0;
    margin: 2px 0 0;
    font-size: 14px;
    text-align: left;
    list-style: none;
    background-color: #fff;
    -webkit-background-clip: padding-box;
    background-clip: padding-box;
    border: 1px solid #ccc;
    border: 1px solid rgba(0,0,0,.15);
    border-radius: 4px;
    -webkit-box-shadow: 0 6px 12px rgba(0,0,0,.175);
    box-shadow: 0 6px 12px rgba(0,0,0,.175);
}
</style>
