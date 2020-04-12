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
		login: function () {
			const verified = this.verifyUser({ username: this.username, password: this.password });

			if (verified) {
				this.$emit('hideLogin');
				return;
			}

			this.showError = true;
		}
	}
}
</script>

<style lang="scss">
.login-form {
	background-color: #d3cecb;
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
</style>