const getters = {
	getUser: (state) => {
		return state.user;
	},
	getTopics: (state) => {
		return state.topics;
	},
	getTopicByLink: (state) => (link) =>{
		return state.topics.find(topic => topic.link === link);
	},
	haveTopicsLoaded: (state) => {
		return state.topics !== null;
	},
	getDiplomas: (state) => {
		return state.diplomas;
	},
	haveDiplomasLoaded: (state) => {
		return state.diplomas !== null;
	}
};

export default getters;
