import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";


export const Login = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

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
				<button onClick={() => actions.sign_in(email, password)} className="btn btn-primary">
					Login
				</button>
			</div>
		</div>
		//create button to send data to endpoint (user information)

	);
};


