import React from "react";
import "./ProjectPage.css";
import addImage from "../../assets/add.png";
import Project from "../../Components/Project/Project";
import { useSelector } from "react-redux";
import uuid from "react-uuid";

import { Link } from "react-router-dom";

const ProjectPage = () => {
	const projects = useSelector(state => state.projects);
	const account = useSelector(state => state.account);
	const isDemo = useSelector(state => state.isDemo);

	return (
		<>
			<div className="projectpage-wrapper">
				{account?.email || isDemo ? (
					<>
						<div className="top-bar">
							<h2>All Projects</h2>
							<Link className="new-project-button" to="/newproject">
								<img src={addImage} alt="add" />
								<p>New Project</p>
							</Link>
							<div className="placeholder"></div>
						</div>
						{projects
							? projects.map(project => <Project props={project} key={uuid()} />)
							: "Loading ..."}{" "}
					</>
				) : (
					<>
						<h2 className="signin-warning">You must sign in to view your projects</h2>
					</>
				)}
			</div>
		</>
	);
};

export default ProjectPage;
