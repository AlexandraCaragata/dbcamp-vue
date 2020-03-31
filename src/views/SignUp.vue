<template>
	<div>
		<h1>Sign Up</h1>
		<div>
			<form class="sign-up-form" @submit.prevent="saveUser">
				<div class="form-container">
					<label for="first-name">First name</label>
					<input type="text" id="first-name" placeholder="First name" v-model="firstName">

					<label for="last-name">Last name</label>
					<input type="text" id="last-name" placeholder="Last name" v-model="lastName">

					<label for="username">Username</label>
					<input type="text" id="username" placeholder="Username" v-model="username">

					<label for="email">Email</label>
					<input type="text" id="email" placeholder="Email" v-model="email">

					<label for="password">Password</label>
					<input type="password" id="password" placeholder="Password" v-model="password">

					<p>Do you already have an account? Sign in <a href="/login">here</a>.</p>
					<button type="submit">Sign Up</button>
				</div>
			</form>
		</div>
	</div>
</template>

<style lang="scss">
	.sign-up-form {
		background-color: #d3cecb;

		display: flex;
		flex-direction: column;

		width: 30%;
		margin: 2vh auto;
		padding: 2vh 2vw;

		a {
			color: coral;
		}

		p {
			font-size: 14px ;
		}
	}



</style>

<script>
	import formDataGenerator from "../services/formDataGenerator";

	export default {
		name: "SignUp",

		data: function () {
			return {
				firstName: '',
				lastName: '',
				username: '',
				email: '',
				password: '',
			}
		},

		methods: {
			saveUser: async function () {
				const response = await fetch('http://localhost/db-camp/databaseConnections/user/create-user.php', {
					method: 'POST',
					body: formDataGenerator.generate({
						firstName: this.firstName,
						lastName: this.lastName,
						username: this.username,
						email: this.email,
						password: this.password,
					}),
				});

				const body = await response.json();

				this.sendConfirmationEmail(body.id);
			},

			sendConfirmationEmail: async function (id) {
				await fetch('http://localhost/db-camp/emailService/api-send-email.php', {
					method: 'POST',
					body: formDataGenerator.generate({
						'email_message' : `In order to validate your account please click this link: http://localhost/db-camp/databaseConnections/user/validate-user.php?id=${id}` ,
						'subject': 'Validation mail',
						'email_address_to': this.email,
					})
				});
			}
		}
	}
</script>

