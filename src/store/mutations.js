const mutations = {
	addUser(state, user) {
		state.user = user;
	},
	markQuestionAnswered(state, question) {
		state.quizzes.forEach(quiz => {
			quiz.questions[quiz.questions.indexOf(question)].answered = true;
		});
	},
	addScoreToQuiz(state, {quiz, score}) {
		state.quizzes[state.quizzes.indexOf(quiz)].score = score;
	},
};

export default mutations;