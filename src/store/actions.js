import formDataGenerator from "../services/formDataGenerator";
import router from "../router/index.js";
import MyAccount from "../views/MyAccount";

const actions = {
	verifyUser({commit}, {username, password}) {
		return new Promise((resolve) => {
			fetch(`${process.env.VUE_APP_API_URL}/sessionService/login.php`, {
				method: 'POST',
				body: formDataGenerator.generate({
					username: username,
					password: password,
				}),
			}).then(async (response) => {
				const body = await response.json();

				if (body.error) {
					resolve(false);
				}

				if (body.success) {
					commit('addUser', body.user);
					await router.push({ name: 'MyAccount' });
					resolve(true);
				}
			});
		});
	},
	fetchTopics ({commit}) {
		return new Promise((resolve) => {
			fetch(`${process.env.VUE_APP_API_URL}/databaseConnections/topics/get-topics.php`).then(
				async (response) => {
					const body = await response.json();

					if (body.error) {
						resolve(false);
					}

					if (body.success) {
						commit('addTopics', body.topics);
						resolve(true);
					}
				}
			)
		});
	},
	fetchDiplomas ({commit}, userId) {
		return new Promise((resolve) => {
			fetch(`${process.env.VUE_APP_API_URL}/databaseConnections/diplomas/get-diplomas-for-user.php?userId=${userId}`).then(
				async (response) => {
					const body = await response.json();

					if (body.error) {
						 resolve(false);
					}

					if (body.success) {
						commit('addDiplomas', body.diplomas);
						 resolve(true);
					}
				}
			)
		});
	}
};

export default actions;
