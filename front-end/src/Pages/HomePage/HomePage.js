import React from "react";
import "./HomePage.css";
import example1 from "../../assets/example1.png";
import example2 from "../../assets/example2.png";

import { Link } from "react-router-dom";

const HomePage = () => {
	return (
		<div className="homepage-wrapper">
			<div className="homepage-grid">
				<div className="introduction">
					<h1>TrackMe</h1>
					<h3>Project Status Tracking Software</h3>
					<p>
						The best way to track the statuses of all your projects wherever you are!
						View and edit all your bugs and todos.
					</p>
				</div>
				<img className="top-right-image" src={example1} alt="example one" />
				<img className="bottom-left-image" src={example2} alt="example one" />
				<div className="try-it-out">
					<h1>Try It Out Now</h1>
					<div className="try-buttons">
						{/* <button>Try Me Now</button> */}
						<Link className="try-me-button" to="/login">
							Signup/Login
						</Link>
						<Link className="try-me-button" to="/login">
							Demo
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
