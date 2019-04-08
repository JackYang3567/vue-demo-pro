<template>
  <div id="app">
    <!--<div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    -->
    <Header />
    <Sidebar />
    <Modal />
    <main >
       <router-view/>
    </main>
    <FooterFloatBar />
    <Footer />
    <BackToTop bgColor="#f90808" svgFillColor="#2c3e50"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/layouts/Headerbar.vue'
import Footer from '@/layouts/Footerbar.vue'
import FooterFloatBar from '@/layouts/FooterFloatBar.vue'
import Modal from '@/layouts/Modal.vue'
import Sidebar from '@/layouts/Sidebar.vue'
//import BackToTop from 'vue-totop'
import BackToTop from '@/layouts/BackToTop.vue'

export default {
  name: 'home',
  components: {
    Header,
    Footer,
    FooterFloatBar,
    Modal,
    Sidebar,
    BackToTop
  }
}
</script>
<style  src="../public/css/style.css" ></style>
<style scoped>
#app {
  /*
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  */

  }
</style>
