<template>
  <!-- SIGN UP SECTION -->
  <section class="signup-section">
    <div class="signup-container">
      <div class="signup-text">
        <h2>Sign up</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum laborum perspiciatis soluta similique ex.</p>
      </div>
      <div class="signup-form">
        <form>
          <label for="nameLabel">Name</label>
          <input type="text" placeholder="Name" name="nameTxt" />
          <label for="emailLabel">E-mail</label>
          <input type="text" placeholder="E-mail" name="emailTxt" />
          <button class="btn-goToSignup">Sign Up</button>
        </form>
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
  width: 800px;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
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
.signup-form {
  margin: auto;
  color: black;
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 18px;
}
.signup-form > form {
  display: grid;
}
label {
  text-align: left;
}
input[type="text"] {
  width: 300px;
  padding: 12px 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-bottom: 10px;
}
</style>

<script>
export default {
  name: "SignupSection.vue"
};
</script>