<template>
	<nav>
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
		<a href="/"><img class="logo" src="../../assets/logo.png" alt /></a>
		<div class="pages" id="navbar">
			<div class="not-logged-in-pages" v-if="!getUser">
				<a href="javascript:void(0);" class="burgericon" v-on:click="responsive">
    			<i class="fa fa-bars"></i>
  				</a>
				<router-link to="/">Home</router-link>
				<router-link to="/about">Who are we</router-link>
				<router-link to="/contact">Contact</router-link>
				<a @click="$emit('showLoginModal')">Login</a>
				<router-link to="/sign-up">Sign Up</router-link>
			</div>
			<div class="logged-in-pages" v-if="getUser">
				<a href="javascript:void(0);" class="burgericon" v-on:click="responsive">
    			<i class="fa fa-bars"></i>
  				</a>
				<router-link to="/topics">Topics</router-link>
				<a><router-link to="/forum">Forum</router-link></a>
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
		background-color: #EBE5E1;
		padding: 0 3vw;
	}

	.logo {
		align-self: flex-start;
		width: 100%;
    	max-width: 200px;
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
	.burgericon{
		display: none;
	}
	@media screen and (max-width: 770px) {
.pages a:not(:first-child) {
	display: none;
	margin-top: 25px;
	border-bottom: 1px solid rgba(51, 51, 51, 0.158);
	}
  a.burgericon {
    float: right;
    display: block;

  }
  .pages.responsive {
	  position: relative;
	  overflow: hidden;
	  }
  .pages.responsive .burgericon {
    position: absolute;
    right: 0;
    top: 10px;
  }
  .pages.responsive a {
    float: none;
    display: block;
    text-align: left;
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
		},
		responsive: function (){
			var x = document.getElementById("navbar");
  			if (x.className === "pages") {
   				 x.className += " responsive";
  				} else {
    				x.className = "pages";
  				}
		}
	}
}
</script>

