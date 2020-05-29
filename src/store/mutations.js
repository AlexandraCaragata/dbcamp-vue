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
	},
	addDiplomas(state, diplomas) {
		state.diplomas = diplomas;
	}
};

export default mutations;
