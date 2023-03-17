import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate()

	//create State for email and password

	const signup = async () => {
		actions.sign_up(email, password)

		navigate("/login")

	}
	return (
		<div>
			<div className="signup-form">
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

			{/* // #button to send data to endpoint */}
			<div>
				<button onClick={() => signup()} className="btn btn-primary">
					Submit
				</button>
			</div>
		</div>


	);
};


