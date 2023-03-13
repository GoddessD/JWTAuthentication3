


const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			api: process.env.BACKEND_URL,
			isAuthenticated: false,
			currentUser: null,
			vehicles: [],
			planets: [],
			characters: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			//exampleFunction: () => {
			//getActions().changeColor(0, "green");

			// SIGN UP
			sign_up: (email, password) => {
				const store = getStore();

				fetch(`${store.api}/api/signup`, {
					method: "POST",
					body: JSON.stringify({
						email: email,
						password: password
					}),
					headers: {
						"Content-type": "application/json",
						'Access-Control-Allow-Origin': '*'
					}
				})
					.then(resp => {
						if (resp.ok) {
							return resp.json();
						}
					})
					.then(data => {
						localStorage.setItem("token", data.token);
						setStore({ isAuthenticated: true });
					})
					.catch(error => console.log("Error during login", error))
			},

			// SIGN IN 
			sign_in: (email, password) => {
				const store = getStore();

				fetch(`${store.api}/api/login`, {
					method: 'POST',
					body: JSON.stringify({
						email: email,
						password: password
					}),

					headers: {
						"Content-type": "application/json",
						"Access-Control-Allow-Origin": "*"
					}
				})
					.then(resp => {
						if (resp.ok) {
							return resp.json();
						}
					})
					.then(data => {
						localStorage.setItem('token', data.token);
						setStore({ isAuthenticated: true });
					})
					.catch(error => console.log('There  was an error signing in', error));
			},

			getPrivate: () => {
				const store = getStore();

				fetch(store.api + "/api/private",
					{
						headers: { Authentication: `Bearer ${localStorage.getItem("token")}` }
					})
					.then(resp => {
						if (resp.ok) {
							return resp.json();
						}
					})
					.then(data => {
						setStore({ currentUser: data });
					})
					.catch(error => console.log('There  was an error signing in', error));


			},


			// VEHICLES
			loadData: () => {
				const store = getStore();

				fetch(`${store.api}/api/vehicles/`, {
					headers: {
						"Content-type": "application/json",
						'Access-Control-Allow-Origin': '*',
						Authorization: `Bearer ${(localStorage.getItem('token'))}`
					}
				})
					.then(response => response.json())
					.then(data => setStore({ vehicles: data }))
					.catch(error => console.log(error));


				// PLANETS
				fetch(`${store.api}/api/planets/`, {
					headers: {
						"Content-type": "application/json",
						'Access-Control-Allow-Origin': '*',
						Authorization: `Bearer ${(localStorage.getItem('token'))}`
					}
				})
					.then(response => response.json())
					.then(data => setStore({ planets: data }))
					.catch(error => console.log(error));


				//CHARACTERS
				fetch(`${store.api}/api/characters/`, {
					headers: {
						"Content-type": "application/json",
						'Access-Control-Allow-Origin': '*',
						Authorization: `Bearer ${(localStorage.getItem('token'))}`
					}
				})
					.then(response => response.json())
					.then(data => setStore({ characters: data }))
					.catch(error => console.log(error))


			}

		}
	};
};

export default getState;
