<template>
  <div>
    <div>
      <form id="sendEmail" @submit.prevent="sendEmail">
          <div class="head-form">
      				<h1>Contact us</h1>
				</div>
        <div class="form-container">
          <div class="form-wrapper">
          <label for="contact-name">Name
          <input type="text" name="contact-name" placeholder="Name" /></label>

          <label for="email">Email
          <input type="text" name="email" placeholder="Email" /></label>
          </div>
          <label for="subject">Subject</label>
          <input type="text" name="subject" placeholder="Subject" />

          <label for="contactInput">Type you message here</label>
          <input type="text" id="contactInput" name="contactInput" />
          

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
