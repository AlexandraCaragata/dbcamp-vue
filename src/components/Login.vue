<template>
	<div class="login-form" v-if="displayLogin">
		<h1>Login</h1>

		<form @submit.prevent="login({
				username: username,
				password: password
			})">
			<div class="form-container">
				<label for="username">Username</label>
				<input type="text" id="username" placeholder="Username" v-model="username">

				<label for="password">Password</label>
				<input type="password" id="password" placeholder="Password" v-model="password">

				<p>You don't have an account? Sign up <a @click="displayLogin=false" href="/sign-up">here</a>.</p>
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
		}
	},
	props: {
		displayLogin: Boolean,
	},
	methods: {
		...mapActions([
			'login'
		]),
	}
}
</script>

<style lang="scss">
.login-form {
	background-color: #d3cecb;

	display: flex;
	flex-direction: column;
	align-items: center;

	width: 30%;
	margin: 2vh auto;
	padding: 2vh 2vw;

	a {
		color: coral;
	}

	p {
		font-size: 14px ;
	}

	top: 20%;
	left: 35%;
	position: absolute;
}
</style>