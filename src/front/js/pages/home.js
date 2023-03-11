import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<><div className="home">
			<h1>
				Welcome to The Star Wars Project
			</h1>
		</div>
			<div className="buttons center">
				<Link to={'/signup'}>
					<button>Sign Up</button>
				</Link>
				<Link to={'/login'}>
					<button>Log In</button>
				</Link>
			</div></>

	);
};
