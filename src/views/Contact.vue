<template>
  <div>
    <h1>Contact us</h1>
    <div>
      <form id="sendEmail" @submit.prevent="sendEmail">
        <div class="form-container">
          <label for="contact-name">Name</label>
          <input type="text" name="contact-name" placeholder="Name" />

          <label for="email">Email</label>
          <input type="text" name="email" placeholder="Email" />

          <label for="subject">Subject</label>
          <input type="text" name="subject" placeholder="Subject" />

          <label for="contactInput">Type Here</label>
          <input type="text" name="contactInput" placeholder="Type Here" />

          <button type="submit">Send Email</button>
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
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: #354865;

  color: white;
  font-size: 16px;
}
</style>

<script>
export default {
  name: "SignUp",
  methods: {
    sendEmail: async function() {
      var oForm = document.querySelector("#sendEmail");
      console.log(new FormData(oForm));
      var jConnection = await fetch(
        "http://192.168.64.2/dbcamp-server/emailService/api-send-email.php",
        {
          method: "POST",
          body: new FormData(oForm)
        }
      );
      //This could also be.json
      var sData = await jConnection.text();
      console.log(sData);
    }
  }
};
</script>
