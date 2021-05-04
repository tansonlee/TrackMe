import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./LoginPage.css";
import { useSelector } from "react-redux";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

import { login, logout } from "../../actions/account";
import { useDispatch } from "react-redux";
import { resetCurrentProject } from "../../actions/currentProject";
import { resetProjects } from "../../actions/projects";
import { setDemo } from "../../actions/demo";

const LoginPage = () => {
	const dispatch = useDispatch();
	const account = useSelector(state => state.account);

	const uiConfig = {
		signInFlow: "popup",
		signInOptions: [
			firebase.auth.GoogleAuthProvider.PROVIDER_ID,
			firebase.auth.GithubAuthProvider.PROVIDER_ID,
		],
		callbacks: {
			signInSuccessWithAuthResult: () => false,
		},
	};

	useEffect(() => {
		firebase.auth().onAuthStateChanged(user => {
			console.log("user", user);
			dispatch(login(user));
		});
	}, [dispatch]);

	return (
		<div className="loginpage-wrapper">
			{account?.email ? (
				<>
					<h2>You are logged in! Welcome {account.displayName}</h2>
					<button
						onClick={() => {
							firebase.auth().signOut();
							dispatch(logout());
							dispatch(resetCurrentProject());
							dispatch(resetProjects());
							dispatch(setDemo(false));
						}}
					>
						Sign out
					</button>
				</>
			) : (
				<>
					<h2>Authenticate with Google or Github</h2>
					<p>Login or signup with the button below.</p>
					<StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />

					<p>Or try the demo (but functionality is limited)</p>
					<Link
						className="loginpage-demo"
						onClick={() => dispatch(setDemo(true))}
						to="/projects"
					>
						DEMO
					</Link>
				</>
			)}
		</div>
	);
};

export default LoginPage;
