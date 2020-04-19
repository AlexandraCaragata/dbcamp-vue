<template>
  <div id="app">
    <Login :displayLogin="displayLogin" @hideLogin="displayLogin = false"></Login>
    <div :class="{ 'opacity': displayLogin }">
      <NavBar @showLoginModal=showLoginModal()></NavBar>
      <router-view @showLogin="showLoginModal()"/>
      <Footer></Footer>
    </div>
  </div>
</template>

<style lang="scss">
// add in here all the rules that are being used application wide
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

  // general form styling
  .form-container {
    margin: 0 auto;
  }

  label {
    display: flex;
    flex-direction: column;
  }

  button {
    width: 30%;
    height: 3em;

    border-radius: 5px;
    border: none;
    background-color: #354865;

    color: white;
    font-size: 16px;
  }

  // this class adds opacity on the page begin the login modal
  .opacity {
    opacity: 40%;
    pointer-events: none;
  }
</style>

<script>
  import NavBar from '@/components/layout/NavBar';
  import Footer from '@/components/layout/Footer';
  import Login from "./components/Login";
  import {mapActions, mapMutations} from "vuex";
  import router from "./router";
  export default {
    components: { Login, Footer, NavBar },
    data: function () {
      return {
        displayLogin: false,
      }
    },
    mounted() {
      if (localStorage.user) {
        this.addUser(JSON.parse(localStorage.user));
        router.push({ name: 'MyAccount' });
      }
    },
    methods: {
      ...mapMutations([
          'addUser',
      ]),
      showLoginModal: function () {
        this.displayLogin = true;
      }
    }
  }
</script>