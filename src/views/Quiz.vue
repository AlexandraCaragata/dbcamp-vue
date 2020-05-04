<template>
	<div v-if="quiz">
		<h1>{{this.quiz.title}}</h1>
		<QuestionContainer
				:question="this.question"
				:position="this.questionNumber"
				:total="this.quiz.questions.length"
				@markQuestionAnswered="markQuestionAnswered"
				@registerScore="registerScore">
		</QuestionContainer>
	</div>
</template>
<script>
import QuestionContainer from "../components/quizzes/QuestionContainer";
import router from "../router";
import formDataGenerator from "../services/formDataGenerator";
import {mapGetters} from "vuex";
export default {
	name: "Quiz",
	data: function () {
		return {
			quiz: null,
			questionNumber: 1,
		};
	},
	components: { QuestionContainer },
	computed: {
		// since this one is a computed method it will automatically update the question object when the position changes
		question() {
			return this.quiz.questions[this.questionNumber - 1];
		},
		...mapGetters([
			'getUser',
		]),
	},
	mounted() {
		if (!this.getUser) {
			router.push({ name: 'Home' });
			return;
		}

		// here it calls the API and gets all the necessary information for the quiz: quiz title and questions
		fetch(`${process.env.VUE_APP_API_URL}/databaseConnections/quizzes/get-quiz.php?quizId=${this.$route.params.quizId}`)
			.then(async (response) => {
			const body = await response.json();

			if (body.success) {
				this.quiz = body.quiz;
			}
		});
	},
	methods: {
		markQuestionAnswered: function () {
			this.questionNumber += 1;
		},
		registerScore: async function (score) {
			await fetch(`${process.env.VUE_APP_API_URL}/databaseConnections/quizzes/save-answered-quiz.php`, {
				method: 'POST',
				body: formDataGenerator.generate({
					quizId: this.quiz.id,
					quizScore: score * 10,
					userId: this.getUser.id,
				}),
			});

			await router.push({ name: 'MyAccount' });
		}
	}
}
</script>
