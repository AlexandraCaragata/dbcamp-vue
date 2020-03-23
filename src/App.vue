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

  h1, h2, h3, h4 {
    text-align: center;
  };

  input {
    font-family: 'Heebo', sans-serif;
    font-weight: 300;
    font-size: 14px;
  }

  #app {
    font-family: 'Heebo', sans-serif;
    font-weight: 400;
    font-size: 16px;
  }
</style>

<script>
  import NavBar from '@/components/layout/NavBar';
  import Footer from '@/components/layout/Footer';
  export default {
    components: { Footer, NavBar },
    methods: {

    }
  }
</script>