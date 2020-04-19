<template>
  <div>
    <h1>Contact us</h1>
    <div>
      <form id="sendEmail">
        <div class="form-container">
          <label for="contact-name">Name</label>
          <input type="text" name="contact-name" placeholder="Name" />

          <label for="email">Email</label>
          <input type="text" name="email" placeholder="Email" />

          <label for="subject">Subject</label>
          <input type="text" name="subject" placeholder="Subject" />

          <label for="contactInput">Type Here</label>
          <input type="text" name="contactInput" placeholder="Type Here" />

          <button type="button" onclick="send()">Send Email</button>
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
async function send() {
  //We're triggering the form through javascript
  var oForm = document.querySelector("#sendEmail");

  var jConnection = await fetch(
    "http://localhost:8080/dbcamp-server/emailService/api-send-email.php",
    {
      method: "POST",
      body: new FormData(oForm)
    }
  );
  //This could also be.json
  var sData = await jConnection.text();
  console.log(sData);
}
</script>