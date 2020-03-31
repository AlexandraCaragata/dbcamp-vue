<template>
  <!-- SIGN UP SECTION -->
  <section class="signup-section">
    <div class="signup-container">
      <div class="signup-text">
        <h2>Sign up</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum laborum perspiciatis soluta similique ex.</p>
        <button class="btn-goToSignup" v-on:click="goToSignup">Sign Up</button>
      </div>
    </div>
  </section>
</template>

<style>
.signup-section {
  background-color: #d3cecb;
  padding: 20px;
}
.signup-container {
  margin: auto;
  display: grid;
  grid-template-columns: 1fr;
}
.signup-text {
  color: black;
  margin: auto;
  line-height: 1.5;
  font-size: 16px;
}
.signup-text > h2 {
  text-align: left;
  margin-top: 0;
  font-size: 30px;
}
@media screen and (min-width: 970px) {
  .signup-section {
    background-color: #d3cecb;
    padding: 20px;
  }
  .signup-container {
    width: 800px;
  }
  .signup-text {
    width: 350px;
    color: black;
    margin: auto;
    line-height: 1.5;
    font-size: 18px;
  }
  .signup-text > h2 {
    text-align: left;
    margin-top: 0;
    font-size: 35px;
  }
}
</style>

<script>
export default {
  name: "SignupSection.vue",
  methods: {
    goToSignup: function() {
      location.href = "/sign-up";
    }
  }
};
</script>