const mutations = {
	addUser(state, user) {
		state.user = user;
		localStorage.setItem('user', JSON.stringify(user));
	},
	removeUser(state) {
		state.user = null;
		localStorage.removeItem('user');
	}
};

export default mutations;