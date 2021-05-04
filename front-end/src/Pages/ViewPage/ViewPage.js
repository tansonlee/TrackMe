import React, { useState } from "react";
import linkImage from "../../assets/link.png";
import "./ViewPage.css";
import List from "./List/List";
import Notes from "./Notes/Notes";
import { useSelector, useDispatch } from "react-redux";
import { changeCurrentProject } from "../../actions/currentProject";
import { Link } from "react-router-dom";

const ViewPage = () => {
	const dispatch = useDispatch();
	const [onTodo, setOnTodo] = useState(true);
	const allProjects = useSelector(state => state.projects);
	const projectId = useSelector(state => state.currentProject);
	if (projectId === "") {
		return "Loading ...";
	}

	const [currentProject] = allProjects.filter(project => project._id === projectId);

	const { name, status, link, description, notes, todos, bugs } = currentProject;

	const handleEdit = () => {
		dispatch(changeCurrentProject(projectId));
	};

	return (
		<div className="viewpage-wrapper">
			<div className="viewpage-info-wrapper">
				<div className="viewpage-column1">
					<div className="viewpage-topbar">
						<h1>{name}</h1>
						<div>
							<p className={`viewpage-${status}`}>Status: {status}</p>
						</div>
						{/* <button onClick={handleEdit}>Edit</button> */}
						<Link onClick={handleEdit} to="/editpage" className="viewpage-edit">
							Edit
						</Link>
						<a href={link} target="_blank" rel="noreferrer">
							<img src={linkImage} alt="link" />
						</a>
					</div>
					<p>{description}</p>
				</div>
				<div className="viewpage-info">
					<div>
						<h2>Todos</h2>
						<p>
							<span>{todos.complete.length}</span> Complete
						</p>
						<p>
							<span>{todos.incomplete.length}</span> Incomplete
						</p>
					</div>
					<div>
						<h2>Bugs</h2>
						<p>
							<span>{bugs.complete.length}</span> Complete
						</p>
						<p>
							<span>{bugs.incomplete.length}</span> Incomplete
						</p>
					</div>
				</div>
			</div>
			<div className="viewpage-data">
				<div className="viewpage-todos-bugs">
					<div className="viewpage-toggle-buttons"></div>

					<div className="viewpage-lists">
						<button
							onClick={() => setOnTodo(true)}
							className={onTodo ? "button-selected" : "button-unselected"}
						>
							Todos
						</button>
						<button
							onClick={() => setOnTodo(false)}
							className={!onTodo ? "button-selected" : "button-unselected"}
						>
							Bugs
						</button>
						<List
							props={{
								title: "Complete",
								listItems: onTodo ? todos.complete : bugs.complete,
							}}
						/>
						<List
							props={{
								title: "Incomplete",
								listItems: onTodo ? todos.incomplete : bugs.incomplete,
							}}
						/>
					</div>
				</div>
				<div className="viewpage-notes">
					<Notes
						props={{
							notes: notes,
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export default ViewPage;
