<template>
  <div id="app">
    <Header></Header>

    <!-- Clear Floats -->
    <div class="clearfix"></div>

    <Slider></Slider>

    <div class="center">
      <router-view></router-view>
      <Sidebar></Sidebar>
    </div>
    
    <!-- Clear Floats -->
    <div class="clearfix"></div>

    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header/Header.vue'
import Slider from './components/Slider/Slider.vue'
import Sidebar from './components/Sidebar/Sidebar.vue'
import Footer from './components/Footer/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Slider,
    Sidebar,
    Footer
  }
}
</script>

<style>
@import './assets/css/style.css';
@import './assets/css/responsive.css';
</style>
