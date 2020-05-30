<template>
  <div class="sign-up-page">
    <div>
      <form class="sign-up-form" @submit.prevent="saveUser" @input="showError = false">
        <div class="head-form">
          <h1>Sign Up</h1>
        </div>

        <div class="error" v-if="showError">{{errorMessage}}</div>
        <div class="success" v-if="showSuccess">{{successMessage}}</div>

        <div class="form-container">
          <div class="wrapper-form">
            <label for="first-name">
              First name
              <input
                type="text"
                id="first-name"
                placeholder="First name"
                v-model="firstName"
              />
            </label>

            <label for="last-name">
              Last name
              <input type="text" id="last-name" placeholder="Last name" v-model="lastName" />
            </label>
          </div>
          <label for="username">Username</label>
          <input type="text" id="username" placeholder="Username" v-model="username" />

          <label for="email">Email</label>
          <input type="text" id="email" placeholder="Email" v-model="email" />

          <label for="password">Password (min. 6 characters)</label>
          <input type="password" id="password" placeholder="Password" v-model="password" />

          <p>
            Do you already have an account? Sign in
            <a @click="$emit('showLogin')">here</a>.
          </p>
          <button type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style lang="scss">
.sign-up-form {
  padding: 10px;
  background-color: #d3cecb;
  width: 100%;
  a {
    color: coral;
    cursor: pointer;
  }
  h1 {
    text-align: center;
  }
}
input {
  width: 90%;
  background: #fff;
  color: #333;
  padding: 10px;
  border-radius: 5px;
  border: solid 1px #d3cecb;
  margin-bottom: 20px;
}
input:focus {
  border: solid #9b646f 2px;
}

@media screen and (min-width: 500px) {
  .sign-up-form {
    width: 450px;
    min-height: 500px;
    height: auto;
    border-radius: 5px;
    margin: 2% auto;
    box-shadow: 0 9px 50px hsla(20, 67%, 75%, 0.31);
    padding: 2%;
    background-color: #d3cecb;
  }
  input {
    width: 100%;
    padding: 14.5px 0px 15px 9px;
  }
  .wrapper-form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
}
</style>

<script>
import formDataGenerator from "../services/formDataGenerator";

export default {
  name: "SignUp",

  data: function() {
    return {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      showError: false,
      errorMessage: "",
      showSuccess: false,
      successMessage: ""
    };
  },

  methods: {
    validateForm: function() {
      if (
        !this.firstName ||
        !this.lastName ||
        !this.username ||
        !this.password ||
        !this.email
      ) {
        this.showError = true;
        return "Please fill in all of the fields";
      }

      if (!this.email.match(/@/)) {
        this.showError = true;
        return "Please enter a valid email address";
      }

      if (this.password.length < 6) {
        this.showError = true;
        return "Password needs to be at least 6 characters";
      }
    },

    saveUser: async function() {
      this.errorMessage = this.validateForm();

      if (this.errorMessage) {
        return;
      }

      const response = await fetch(
        `${process.env.VUE_APP_API_URL}/databaseConnections/user/create-user.php`,
        {
          method: "POST",
          body: formDataGenerator.generate({
            firstName: this.firstName,
            lastName: this.lastName,
            username: this.username,
            email: this.email,
            password: this.password
          })
        }
      );

      const body = await response.json();
      if (body.success) {
        this.showSuccess = true;
        this.successMessage =
          "User was successfully created! Check your mail to validate yourself!";

        await this.sendConfirmationEmail(body.id);
      }
    },

    sendConfirmationEmail: async function(id) {
      await fetch(
        `${process.env.VUE_APP_API_URL}/emailService/api-send-email.php`,
        {
          method: "POST",
          body: formDataGenerator.generate({
            message: `In order to validate your account please click this link: ${process.env.VUE_APP_API_URL}/databaseConnections/user/validate-user.php?id=${id}`,
            subject: "Validation mail",
            emailTo: this.email,
            replyEmail: "elearning.dbcamp@gmail.com",
            emailFrom: "elearning.dbcamp@gmail.com",
            name: "DBCamp"
          })
        }
      );
    }
  }
};
</script>

