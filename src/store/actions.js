import formDataGenerator from "../services/formDataGenerator";
import router from "../router/index.js";
import MyAccount from "../views/MyAccount";

const actions = {
	verifyUser({commit}, {username, password}) {
		fetch('http://localhost/db-camp/sessionService/login.php', {
			method: 'POST',
			body: formDataGenerator.generate({
				username: username,
				password: password,
			}),
		}).then(async (response) => {
			const body = await response.json();

			if (body.error) {
				return false;
			}

			if (body.success) {
				commit('addUser', body.user);
				await router.push({ name: 'MyAccount' });
				return true;
			}
		});
	},
	fetchTopics ({commit}) {
		fetch('http://localhost/db-camp/databaseConnections/topics/get-topics.php').then(
			async (response) => {
				const body = await response.json();

				if (body.error) {
					return false;
				}

				if (body.success) {
					commit('addTopics', body.topics);
					return true;
				}
			}
		)
	},
	fetchDiplomas ({commit}, userId) {
		fetch(`http://localhost/db-camp/databaseConnections/diplomas/get-diplomas-for-user.php?userId=${userId}`).then(
			async (response) => {
				const body = await response.json();

				if (body.error) {
					return false;
				}

				if (body.success) {
					commit('addDiplomas', body.diplomas);
					return true;
				}
			}
		)
	}
};

export default actions;