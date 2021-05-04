import React, { useState, useEffect } from "react";
import "./TopBar.css";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../../assets/logo.svg";

const TopBar = () => {
	const location = useLocation();
	const account = useSelector(state => state.account);
	const [currentPage, setCurrentPage] = useState(location.pathname);

	useEffect(() => {
		setCurrentPage(location.pathname);
	}, [location.pathname]);

	return (
		<div className="topbar-wrapper">
			<Link className="title-area" to="/">
				<img src={logo} alt="logo" />
				<h1>TrackMe</h1>
			</Link>
			<Link className={`projects-nav ${currentPage === "/" ? "selected-page" : ""}`} to="/">
				Home
			</Link>
			<Link
				className={`projects-nav ${currentPage === "/projects" ? "selected-page" : ""}`}
				to="/projects"
			>
				All Projects
			</Link>
			<Link
				className={`projects-nav ${currentPage === "/newproject" ? "selected-page" : ""}`}
				to="/newproject"
			>
				New Project
			</Link>
			{/* <div className="account-area"> */}
			<Link className="account-area" to="/login">
				{account?.email ? account.displayName : "Login"}
				{account?.email && <img src={account.photoURL} alt="profile" />}
			</Link>
			{/* </div> */}
		</div>
	);
};

export default TopBar;
