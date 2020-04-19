<template>
  <div>
    <h1>Contact us</h1>
    <div>
      <form id="sendEmail" @submit.prevent="sendEmail">
        <div class="form-container">
          <label for="contact-name">Name</label>
          <input type="text" name="contact-name" placeholder="Name" v-model="contactName" />

          <label for="email">Email</label>
          <input type="text" name="email" placeholder="Email" v-model="email" />

          <label for="contact-phone">Phone</label>
          <input type="text" name="contact-phone" placeholder="Phone" v-model="contactPhone" />

          <label for="contactInput">Type Here</label>
          <input type="text" name="contactInput" placeholder="Type Here" v-model="contactInput" />

          <button type="submit">Send</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style lang="scss">
#sendEmail {
  background-color: #d3cecb;
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 2vh auto;
  padding: 4vh 4vw;

  a {
    color: coral;
  }

  p {
    font-size: 14px;
  }

  input {
    width: 600px;
  }
}

.form-container {
  margin-left: 4vw;
}

#contactInput {
  height: 100px;
  padding-top: 5px;
}

label {
  display: flex;
  flex-direction: column;
}

button {
  margin: 0 auto;
  width: 600px;
  height: 3em;

  border-radius: 5px;
  border: none;
  background-color: #354865;

  color: white;
  font-size: 16px;
}
</style>

<script>

export default {
  name: "Contact",

  data: function() {
    return {
      contactName: "",
      email: "",
      contactPhone: "",
      contactInput: ""
    };
  },

  methods: {
    sendEmail: async function() {
      const oForm = new FormData();

      oForm.append("contactName", this.contactName);
      oForm.append("email", this.email);
      oForm.append("contactPhone", this.contactPhone);
      oForm.append("contactInput", this.contactInput);

      await fetch(
        "http://localhost:8080/dbcamp-server/emailService/api-send-email.php",
        {
          method: "POST",
          body: oForm
        }
      );
    }
  }
};
</script>