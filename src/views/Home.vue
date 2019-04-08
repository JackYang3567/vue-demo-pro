<template>
  <div>
  <!--  <img alt="Vue logo" src="../assets/logo.png"> -->
  <Slider />
     <HelloWorld  msg="a vue.js app" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Slider from '@/components/Slider.vue'

export default {
  name: 'home',
  data () {
    return {
      show: true
    }
  },
  computed: {
    increment () {
      return this.$store.commit('increment')
    },
    count () {
      return this.$store.state.count
    }
  },
  components: {
    HelloWorld,
    Slider
  }
}
</script>

<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }
</style>
