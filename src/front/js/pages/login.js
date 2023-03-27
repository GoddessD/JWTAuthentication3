import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const Login = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate()
	//create a "check" so if they have a login, they will go to Dashboard page

	const handleSignin = () => {
		if (email === "" || password === "") {
			alert("Please enter your email and password")
		} else {
			actions.sign_in(email, password)

		}
	}

	useEffect(() => {

		if (localStorage.getItem("token")) {
			navigate("/private")
		}

	}, [store.isAuthenticated]);

	// saving the token in the local storage
	// const logIn = async (email, password) => {
	// 	try {
	// 		const response = await fetch(LOGIN_API_URL, {
	// 			method: 'POST',
	// 			headers: {
	// 				'Content-Type': 'application/json'
	// 			},
	// 			body: JSON.stringify({ email, password })
	// 		});
	// 		const data = await response.json();
	// 		if (response.ok) {
	// 			localStorage.setItem('token', data.token); // save the token in localStorage
	// 			setStore({ currentUser: data.email });
	// 		}
	// 		return response;
	// 	} catch (error) {
	// 		console.error(error);
	// 	}
	// };

	// const getToken = () => {
	// 	const token = localStorage.getItem('token');
	// 	if (token) {
	// 		return token;
	// 	} else {
	// 		return null;
	// 	}
	// };


	//create State for email and password

	return (
		<div>
			<div className="sign_in-form">
				<div className="forms">
					<label>Email Address</label>
					<input
						type="email"
						value={email}
						placeholder="Enter your email"
						onChange={e => setEmail(e.target.value)}
					/>
				</div>

				<div className="forms">
					<label>Password</label>
					<input
						type="password"
						value={password}
						placeholder="Enter your password"
						onChange={e => setPassword(e.target.value)}
					/>
				</div>
			</div>

			{/* // remember me checkbox
			<div>
				<div className="form-check">
					<input type="checkbox" className="form-check-input" id="remember-me" />
					<label className="form-check-label" htmlFor="remember-me">Remember Me</label>
				</div>
				<button onClick={() => signup()} className="btn btn-primary">
					Submit
				</button>
			</div> */}

			<div>
				<button onClick={() => {
					handleSignin()
				}} className="btn btn-primary">
					Login
				</button>
			</div>
		</div>
		//create button to send data to endpoint (user information)

	);
};


