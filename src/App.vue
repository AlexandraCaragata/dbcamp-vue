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
    width: 90%;
    background: #fff;
    color: #333;
    padding: 10px;
    border-radius: 5px;
	border: solid 1px #EBE5E1;
	margin-bottom: 20px;
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
    width: 40%;
    height: 3em;
    cursor: pointer;

    border-radius: 5px;
    border: none;
    background-color: #354865;

    color: white;
    font-size: 16px;
    cursor: pointer;

    &:hover {
      box-shadow: 4px 8px 8px rgba(0,0,0,0.3);
    }
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
    async mounted() {
      if (localStorage.user) {
        this.addUser(JSON.parse(localStorage.user));
        await this.fetchTopics();
      }
    },
    methods: {
      ...mapMutations([
          'addUser',
      ]),
      ...mapActions([
        'fetchTopics'
      ]),
      showLoginModal: function () {
        this.displayLogin = true;
      }
    }
  }
</script>
