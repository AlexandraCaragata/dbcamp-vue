<template>
  <div id="app">
    <NavBar></NavBar>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<style lang="scss">
  html, body, #app {
    margin: 0;
    height: 100%;
  }

  a {
    text-decoration: none;
    color: black;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>

<script>
  import NavBar from '@/components/layout/NavBar.vue';
  import Footer from '@/components/layout/Footer.vue';
  export default {
    components: {Footer, NavBar },
    methods: {

    }
  }
</script>