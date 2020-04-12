const getters = {
	getUser: (state) => {
		return state.user;
	},
	getQuiz: (state) => (topic) => {
		return state.quizzes.find(quiz => quiz.title === topic)
	},
};

export default getters;
