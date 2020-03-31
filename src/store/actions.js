import formDataGenerator from "../services/formDataGenerator";
import router from "../router/index.js";

const actions = {
	login({commit}, {username, password}) {
		fetch('http://localhost/db-camp/sessionService/login.php', {
			method: 'POST',
			body: formDataGenerator.generate({
				username: username,
				password: password,
			}),
		}).then(async (response) => {
			const body = await response.json();

			if (body.error) {
				console.log(body.message);
				return false;
			}

			if (body.success) {
				commit('addUser', body.user);
				router.push({ name: 'MyAccount' });
				return true;
			}
		});
	}
};

export default actions;