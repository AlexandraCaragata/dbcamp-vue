const getters = {
	getUser: (state) => {
		return state.user;
	},
	getQuiz: (state) => (topic) => {
		return state.quizzes.find(quiz => quiz.title === topic)
	},
	getCourses: (state) => {
		return state.courses;
	}
};

export default getters;
