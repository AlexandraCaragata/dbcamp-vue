<template>
	<div class="login-form" v-if="displayLogin">
		<a class="cancel-link" @click="$emit('hideLogin')">Cancel</a>

		<h1>Login</h1>
		<div class="error" v-if="showError">Incorrect credentials</div>

		<form @submit.prevent="login()">
			<div class="form-container">
				<label for="username">Username</label>
				<input type="text" id="username" placeholder="Username" v-model="username">

				<label for="password">Password</label>
				<input type="password" id="password" placeholder="Password" v-model="password">

				<p>Don't have an account? Sign up <a @click="displayLogin=false" href="/sign-up">here</a>.</p>
				<button type="submit">Login</button>
			</div>
		</form>
	</div>
</template>

<script>
import {mapActions} from "vuex";

export default {
	name: "Login",
	data: function () {
		return {
			username: '',
			password: '',
			showError: false,
		}
	},
	props: {
		displayLogin: Boolean,
	},
	methods: {
		...mapActions([
			'verifyUser'
		]),
		login: async function () {
			this.verifyUser({ username: this.username, password: this.password }).then((verified) => {
				console.log(verified);
				if (verified) {
					this.$emit('hideLogin');
					this.username = '';
					this.password = '';
					return;
				}

				this.showError = true;
			});
		}
	}
}
</script>

<style lang="scss">
.error {
	color: darkred;
	font-size: 18px;
}
.login-form {
    background-color: #EBE5E1;
    z-index: 999;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 80%;
    padding: 2vh 2vw;
    top: 20%;
    left: 8%;
    position: absolute;

		a {
		color: coral;
		cursor: pointer;
	}

	.cancel-link {
		align-self: flex-end;
	}

	p {
		font-size: 16px;
		text-align: center;
	}

	button[type=submit] {
		align-self: baseline;
	}
}

@media screen and (min-width: 1000px) {
.login-form {
	background-color: #EBE5E1;
	z-index: 999;

	display: flex;
	flex-direction: column;
	align-items: center;

	width: 30%;
	margin: 2vh auto;
	padding: 2vh 2vw;

	a {
		color: coral;
		cursor: pointer;
	}

	.cancel-link {
		align-self: flex-end;
	}

	p {
		font-size: 16px;
		text-align: center;
	}

	top: 20%;
	left: 35%;
	position: absolute;

	button[type=submit] {
		align-self: baseline;
	}
}
}
</style>
