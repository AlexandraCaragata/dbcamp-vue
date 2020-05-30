<template>
  <div>
    <div>
      <form id="sendEmail" @submit.prevent="sendEmail" @input="showError = false">
        <div class="head-form">
          <h1>Contact us</h1>
				</div>

        <div class="error" v-if="showError">{{errorMessage}}</div>
        <div class="success" v-if="showSuccess">{{successMessage}}</div>

        <div class="form-container">
          <div class="form-wrapper">
          <label for="contact-name">Name
            <input type="text" id="contact-name" name="contact-name" placeholder="Name" v-model="name"/>
          </label>

          <label for="email">Email
            <input type="text" id="email" name="email" placeholder="Email" v-model="email"/>
          </label>
          </div>
          <label for="subject">Subject</label>
          <input type="text" id="subject" name="subject" placeholder="Subject" v-model="subject"/>

          <label for="contactInput">Type you message here</label>
          <input type="text" id="contactInput" name="contactInput" placeholder="Type you message here" v-model="message"/>

          <button type="submit">Send Email</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style lang="scss">
#sendEmail {
  padding: 10px;
  background-color: #d3cecb;
    a {
      color: coral;
      cursor: pointer;
    }
    h1{
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
#sendEmail {
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
.form-wrapper{
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 20px;
}
#contactInput{
  height: 100%;
  min-height: 100px;
}
}
.success {
  color: darkgreen;
}
</style>

<script>
import formDataGenerator from "../services/formDataGenerator";

export default {
  name: "SignUp",
  data: function () {
    return {
      name: '',
      subject: '',
      email: '',
      message: '',
      showError: false,
      errorMessage: '',
      showSuccess: false,
      successMessage: '',
    };
  },
  methods: {
    validateForm: function () {
      if (!this.name || !this.email || !this.subject || !this.message) {
        this.showError = true;
        return 'Please fill in all of the fields';
      }

      if (!this.email.match(/@/)) {
        this.showError = true;
        return 'Please enter a valid email address';
      }
    },
    sendEmail: async function() {
      this.errorMessage = this.validateForm();

      if (this.errorMessage) {
        return;
      }

      const response = await fetch(
        `${process.env.VUE_APP_API_URL}/emailService/api-send-email.php`,
        {
          method: "POST",
          body: formDataGenerator.generate({
            message: this.message,
            subject: this.subject,
            emailTo: 'elearning.dbcamp@gmail.com',
            replyEmail: this.email,
            emailFrom: this.email,
            name: this.name,
          })
        }
      );

      const data = await response.text();

      this.showSuccess = true;
      this.successMessage = 'Message successfully sent!';

      console.log(data);

      this.name = '';
      this.subject = '';
      this.email = '';
      this.message = '';
    }
  }
};
</script>
