import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const Login = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate()
	//create a "check" so if they have a login, they will go to Dashboard page


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

			<div>
				<button onClick={() => {
					if (email === "" && password === "") {
						alert("Please enter your email and password")
					} else {
						actions.sign_in(email, password)
						navigate("/private")
					}
				}} className="btn btn-primary">
					Login
				</button>
			</div>
		</div>
		//create button to send data to endpoint (user information)

	);
};


