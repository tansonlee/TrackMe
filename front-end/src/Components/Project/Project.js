import React from "react";
import "./Project.css";
import linkImage from "../../assets/link.png";
import { changeCurrentProject } from "../../actions/currentProject";
import { deleteProject } from "../../actions/projects";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import trash from "../../assets/trash.svg";

const Project = ({ props: { name, status, description, todos, bugs, link, _id } }) => {
	const dispatch = useDispatch();
	const isDemo = useSelector(state => state.isDemo);
	// const account = useSelector(state => state.account);

	const setCurrentProject = () => {
		dispatch(changeCurrentProject(_id));
	};

	const handleDeleteProject = () => {
		dispatch(deleteProject(_id));
		alert(`Deleted ${name}`);
	};

	// if (!(account?.email || isDemo)) {
	// 	return <h2 className="signin-warning">You must sign in to view a project</h2>;
	// }

	return (
		<>
			<div className={`project-wrapper ${status}`}>
				<div className="project-column1">
					<h2>{name}</h2>
					<p>{description}</p>
				</div>
				<div className="project-column2">
					<h2>Todos</h2>
					<p>
						<span>{todos.complete.length}</span> Complete
					</p>
					<p>
						<span>{todos.incomplete.length}</span> Incomplete
					</p>
				</div>
				<div className="project-column3">
					<h2>Bugs</h2>
					<p>
						<span>{bugs.complete.length}</span> Complete
					</p>
					<p>
						<span>{bugs.incomplete.length}</span> Incomplete
					</p>
				</div>
				<a className="project-link" target="_blank" rel="noreferrer" href={link}>
					<img src={linkImage} alt="link" />
				</a>
				<div className="project-column4">
					<Link className="view-edit-button" to="/viewpage" onClick={setCurrentProject}>
						View
					</Link>
					<Link className="view-edit-button" to="/editpage" onClick={setCurrentProject}>
						Edit
					</Link>
				</div>

				{!isDemo && (
					<div className="delete-icon">
						<img src={trash} alt="delete" onClick={handleDeleteProject} />
					</div>
				)}
			</div>
		</>
	);
};

export default Project;
