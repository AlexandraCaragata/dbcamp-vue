<template>
	<nav>
		<img src="../../assets/logo.png" alt="">
		<div class="pages">
			<div class="not-logged-in-pages" v-if="!getUser">
				<router-link to="/">Home</router-link>
				<router-link to="/about">Who are we</router-link>
				<router-link to="/contact">Contact</router-link>
				<a @click="$emit('showLoginModal')">Login</a>
				<router-link to="/sign-up">Sign Up</router-link>
			</div>
			<div class="logged-in-pages" v-if="getUser">
				<router-link to="/topics">Topics</router-link>
				<router-link to="/forum">Forum</router-link>
				<router-link to="/my-account">My Account</router-link>
				<router-link to="/contact">Contact</router-link>
				<a @click="logout">Logout</a>
			</div>
		</div>
	</nav>
</template>

<style lang="scss">
	nav {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;

		background-color: #d3cecb;
		padding: 0 3vw;
	}

	img {
		align-self: flex-start;
		height: 10vh;
		width: auto;
	}

	div.pages {
		display: flex;
		flex-direction: row;

		div.not-logged-in-pages > *, div.logged-in-pages > * {
			margin-left: 1vw;
		}
	}

	.not-logged-in-pages, .logged-in-pages {
		a {
			cursor: pointer;
		}
	}
</style>

<script>
	import {mapGetters, mapMutations} from "vuex";
	import router from "../../router";

export default {
	name: "NavBar",
	computed: {
		...mapGetters([
			'getUser'
		]),
	},
	methods: {
		...mapMutations([
			'removeUser'
		]),
		logout: function () {
			this.removeUser();
			router.push({ name: 'Home'});
		}
	}
}
</script>

