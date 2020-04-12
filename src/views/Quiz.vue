<template>
	<div>
		<h1>{{this.quiz.title}}</h1>
		<QuestionContainer
				:question="this.question"
				:position="this.quiz.questions.indexOf(this.question) + 1"
				:total="this.quiz.questions.length"
				@registerScore="registerScore()">
		</QuestionContainer>
	</div>
</template>
<script>
import QuestionContainer from "../components/quizzes/QuestionContainer";
import {mapGetters, mapMutations} from "vuex";
import router from "../router";
export default {
	name: "Quiz",
	data: function () {
		return {
			topic: 'SQL',
		};
	},
	components: { QuestionContainer },
	computed: {
		...mapGetters([
			'getQuiz'
		]),
		quiz() {
			return this.getQuiz(this.topic);
		},
		question() {
			return this.quiz.questions.find(question => question.answered === false)
		}
	},
	methods: {
		...mapMutations([
			'addScoreToQuiz',
		]),
		registerScore: function (score) {
			this.addScoreToQuiz({quiz: this.quiz, score: score});

			router.push({ name: 'MyAccount' });
		}
	}
}
</script>
