<template>
	<div>
		<h1>Sign Up</h1>
		<div>
			<form class="sign-up-form" ref="signpForm" @submit.prevent="saveUser">
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

	.form-container {
		margin-left: 4vw;
	}

	input {
		margin: 0.5vh 0;
		width: 70%;
		height: 3em;

		border: none;
		padding: 0 0.5vw;
	}

	label {
		display: flex;
		flex-direction: column;
	}

	button {
		margin: 0 auto;
		width: 20%;
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
				const formData = new FormData();

				formData.append('firstName', this.firstName);
				formData.append('lastName', this.lastName);
				formData.append('username', this.username);
				formData.append('email', this.email);
				formData.append('password', this.password);

				await fetch('http://localhost/db-camp/databaseConnections/user/create-user.php', {
					method: 'POST',
					body: formData,
				});
			}
		}
	}
</script>

