const mutations = {
	addUser(state, user) {
		state.user = user;
		localStorage.setItem('user', JSON.stringify(user));
	},
	removeUser(state) {
		state.user = null;
		localStorage.removeItem('user');
	},
	addTopics(state, topics) {
		state.topics = topics;
	}
};

export default mutations;