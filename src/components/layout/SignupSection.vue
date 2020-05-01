<template>
  <!-- SIGN UP SECTION -->
  <section class="signup-section">
    <div class="signup-container">
      <div class="signup-text">
        <h2>Join the journey and become a better developer!</h2>
        <p>Sign up to DB Camp and get access to learning materials for all five topics including our super cool forum.</p>
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
  font-size: 25px;
}

@media screen and (min-width: 450px) {
  .signup-section {
    padding: 30px;
  }
  .signup-container {
    width: 400px;
  }

}


@media screen and (min-width: 970px) {

  .signup-container {
    width: 800px;
  }
  .signup-text {
    width: 450px;
    font-size: 18px;
  }
  .signup-text > h2 {
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