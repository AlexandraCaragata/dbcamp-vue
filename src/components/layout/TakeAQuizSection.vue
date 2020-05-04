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
// QUIZ SECTION
.quiz-section {
	margin: 40px 0;
	background-image: url("../../assets/friends-codeing.jpg");
	width: 100%;
	height: 600px;
	background-position: bottom;
	background-repeat: no-repeat;
	background-size: cover;
	position: relative;
	box-shadow: inset 0 0 0 2000px rgba(245, 243, 243, 0.26);
}

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
	text-align: center;
	font-size: 40px;
	margin-top: 0;
}
.go-to-quiz > h2 {
	font-size: 40px;
	margin-bottom: 0;
}
.btn-goToQuiz {
	width: 350px;
	margin-bottom: 20px;
	font-size: 25px;
	cursor: pointer;
}
</style>
