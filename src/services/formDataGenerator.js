// generates formData objects from normal objects. This can be used when doing POST fetch requests.
const formDataGenerator = {
	generate(data) {
		const formData = new FormData();

		Object.keys(data).forEach((key) => {
			if (data[key] instanceof Blob || data[key] instanceof ArrayBuffer) {
				formData.append(key, data[key], 'application/octet-stream');
				return;
			}

			if (data[key] instanceof Object) {
				formData.append(key, JSON.stringify(data[key]));
				return;
			}

			formData.append(key, data[key]);
		});

		return formData;
	},
};

export default  formDataGenerator;