<template>
  <div>
  <!--  <img alt="Vue logo" src="../assets/logo.png"> -->
  <Slider />
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Slider from '@/components/Slider.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    Slider
  }
}
</script>
