async function getDataUsers(action, method = 'GET', body) {
  const API = 'https://64dfcf5f71c3335b25831634.mockapi.io/api/v1/';
	const URL = `${API}${action}`;

	const params = {
		method,
		headers: {
			'Content-Type': 'application/json',
		},
	};

	if (body) params.body = JSON.stringify(body);

	try {
		const response = await fetch(URL, params);
		if (!response.ok) {
			throw new Error(response.statusText);
		};
		const data = await response.json();
    
		return data;

	} catch (err) {
		console.log(err);
	}
}

export  default getDataUsers