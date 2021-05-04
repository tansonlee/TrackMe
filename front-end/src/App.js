import { useEffect } from "react";
import "./App.css";
import TopBar from "./Components/TopBar/TopBar";
import Footer from "./Components/Footer/Footer";
import ProjectPage from "./Pages/ProjectPage/ProjectPage";
import ViewPage from "./Pages/ViewPage/ViewPage";
import EditPage from "./Pages/EditAndNew/EditPage/EditPage";
import NewProject from "./Pages/EditAndNew/NewProject/NewProject";
import LoginPage from "./Pages/LoginPage/LoginPage";
import HomePage from "./Pages/HomePage/HomePage";
import { useDispatch } from "react-redux";
import { getAllProjects, setAllProjects } from "./actions/projects";

import demoData from "./assets/data";

import firebase from "firebase";
import { login } from "./actions/account";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";

const App = () => {
	const dispatch = useDispatch();
	const account = useSelector(state => state.account);
	const isDemo = useSelector(state => state.isDemo);

	useEffect(() => {
		if (!firebase.apps.length) {
			firebase.initializeApp({
				apiKey: "AIzaSyDBygxMDgPRY2tOWwf3cl3FsaU7U-oOP30",
				authDomain: "trackme-f361d.firebaseapp.com",
			});
		} else {
			firebase.app(); // if already initialized, use that one
		}
	}, []);

	useEffect(() => {
		if (account?.email) {
			dispatch(getAllProjects(account.email));
		}
	}, [dispatch, account]);

	useEffect(() => {
		dispatch(setAllProjects(demoData));
	}, [dispatch, isDemo]);

	useEffect(() => {
		firebase.auth().onAuthStateChanged(user => {
			console.log("user", user);
			dispatch(login(user));
		});
	}, [dispatch]);

	return (
		<div className="app-wrapper">
			<Router>
				<div className="content-wrap">
					<TopBar />
					<Switch>
						<div className="site-content">
							<Route path="/" exact component={HomePage} />
							<Route path="/projects" exact component={ProjectPage} />
							<Route path="/login" exact component={LoginPage} />
							<Route path="/viewpage" component={ViewPage} />
							<Route path="/editpage" component={EditPage} />
							<Route path="/newproject" component={NewProject} />
						</div>
					</Switch>
					<Footer className="footer" />
				</div>
			</Router>
		</div>
	);
};

export default App;
