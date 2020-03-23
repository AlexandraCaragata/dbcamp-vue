<template>
	<nav>
		<img src="../../assets/logo.png" alt="">
		<div class="pages">
			<div class="not-logged-in-pages">
				<router-link to="/">Home</router-link>
				<router-link to="/about">Who are we</router-link>
				<router-link to="/contact">Contact</router-link>
				<router-link to="/login">Login</router-link>
			</div>
			<div class="logged-in-pages" v-if="false">
				<router-link to="/topics">Topics</router-link>
				<router-link to="/forum">Forum</router-link>
				<router-link to="/my-account">My Account</router-link>
				<router-link to="/contact">Contact</router-link>
				<router-link to="/logout">Logout</router-link>
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

		background-color: #e8e2d2;
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
</style>

<script>
	export default {
		name: "NavBar.vue"
	}
</script>

