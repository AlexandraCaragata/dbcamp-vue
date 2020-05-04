<template>
	<section class="quiz-section">
		<div class="go-to-quiz">
			<h2>TAKE THE QUIZ</h2>
			<p>And get a diploma</p>
			<button class="btn-goToQuiz" v-on:click="goToQuiz">START</button>
		</div>
	</section>
</template>

<script>
import router from "../../router";

export default {
	name: "TakeAQuizSection",
	props: {
		topic: Object,
	},
	methods: {
		goToQuiz: function() {
			router.push({ name: 'quiz', params: { quizId: this.topic.quiz_id }});
		}
	}
}
</script>

<style lang="scss">
.go-to-quiz {
	width: 200px;
	background-color: rgba(245, 245, 245, 0.842);
	text-align: center;
	padding: 25px;
	position: absolute;
	top: 50%;
	left: 50%;
	-webkit-transform: translate(-50%, -50%);
	transform: translate(-50%, -50%);
}
.go-to-quiz > p {
	text-align: center;
	font-size: 20px;
	margin-top: 0;
}
.go-to-quiz > h2 {
	font-size: 20px;
	margin-bottom: 0;
}
.btn-goToQuiz {
	width: 150px;
	margin-bottom: 20px;
	font-size: 14px;
	cursor: pointer;
}

@media screen and (min-width: 450px) {
	// QUIZ SECTION
	.go-to-quiz {
		width: 500px;
		background-color: rgba(245, 245, 245, 0.842);
		text-align: center;
		padding: 25px;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	.go-to-quiz > p {

		font-size: 30px;

	}
	.go-to-quiz > h2 {
		font-size: 30px;

	}
	.btn-goToQuiz {
		width: 300px;
		margin-bottom: 20px;
		font-size: 20px;
		cursor: pointer;
	}
	//FORUM BANNER
	.forum-container {
		width: 700px;
		margin: auto;
		margin-bottom: 40px;
	}
}
@media screen and (min-width: 900px) {
	//FORUM BANNER
	.forum-container {
		width: 900px;
	}
}
@media screen and (min-width: 1100px) {
	// QUIZ SECTION
	.go-to-quiz {
		width: 500px;
		background-color: rgba(245, 245, 245, 0.842);
		text-align: center;
		padding: 25px;
		position: absolute;
		top: 50%;
		left: 78%;
		transform: translate(-50%, -50%);
	}
	.go-to-quiz > p {

		font-size: 40px;

	}
	.go-to-quiz > h2 {
		font-size: 40px;

	}
	.btn-goToQuiz {
		width: 350px;
		margin-bottom: 20px;
		font-size: 25px;
		cursor: pointer;
	}

	.forum-container {
		width: 1000px;
		margin: auto auto 40px;
	}
}
</style>
