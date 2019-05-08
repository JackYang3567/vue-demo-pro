
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
                        <router-link to="/"><h1>UVEN{{isLogin}}</h1></router-link>
                    </div>
                </div>
                <div class="col s3">
                    <div class="content-right" v-if="isLogin">
                        <!-- <a href="#modal">-->
                       <a href="#modal" class="modal-trigger">
                            <i class="fas fa-user"></i>
                        </a> 
                        <a href="/signout" title="Sign Out">
                            <i class="fas fa-sign-out-alt"></i>
                        </a>
                    </div>
                     <div class="content-right" v-else>
                        <a href="/signin" title="Sign In">
                            <i class="fas fa-sign-in-alt"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from 'vuex'

export default {
  name: 'Headerbar',
  computed:  mapState({
    isLogin: state => state.auth.isLogin
  }),
  created () {
   // this.$store.dispatch('auth/loginAction')
  }
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
