import React, { useState } from "react";
import "../EditAndNew.css";
import { useHistory, Link } from "react-router-dom";

import List from "../List/List";

import { createProject } from "../../../actions/projects";
import { useDispatch, useSelector } from "react-redux";

const NewProject = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const account = useSelector(state => state.account);

	const emptyProject = {
		name: "",
		status: "unstarted",
		link: "",
		description: "",
		notes: "",
		todos: { complete: [], incomplete: [] },
		bugs: { complete: [], incomplete: [] },
	};

	const [formData, setFormData] = useState(emptyProject);

	const handleSubmit = e => {
		e.preventDefault();

		if (!account) {
			console.log("not logged in");
			return;
		}

		dispatch(createProject({ ...formData, email: account.email }));
		setFormData(emptyProject);

		history.push("/projects");
	};

	if (!account?.email) {
		return <h2 className="signin-warning">You must sign in to create a new project</h2>;
	}

	return (
		<div className="newproject-wrapper">
			<form onSubmit={handleSubmit}>
				{/* name */}
				<input type="hidden" name="contact-form" value="contact-form" />
				<p>Project Name</p>
				<input
					required
					name="name"
					type="text"
					placeholder="Running App"
					onChange={e => setFormData({ ...formData, name: e.target.value })}
				/>
				{/* status */}
				<p>Project Status</p>
				<div className="status-buttons">
					<button
						type="button"
						className={
							formData.status === "unstarted"
								? "highlight-button"
								: "unhighlight-button"
						}
						onClick={e => setFormData({ ...formData, status: "unstarted" })}
					>
						Unstarted
					</button>
					<button
						type="button"
						className={
							formData.status === "incomplete"
								? "highlight-button"
								: "unhighlight-button"
						}
						onClick={() => setFormData({ ...formData, status: "incomplete" })}
					>
						Incomplete
					</button>
					<button
						type="button"
						className={
							formData.status === "complete"
								? "highlight-button"
								: "unhighlight-button"
						}
						onClick={() => setFormData({ ...formData, status: "complete" })}
					>
						Complete
					</button>
				</div>
				{/* link */}
				<p>Project Link</p>
				<input
					name="link"
					type="text"
					placeholder="https://github.com/tansonlee"
					onChange={e => setFormData({ ...formData, link: e.target.value })}
				/>
				{/* description */}
				<p>Project Description</p>
				<textarea
					name="description"
					type="text"
					placeholder="Description . . ."
					onChange={e => setFormData({ ...formData, description: e.target.value })}
				></textarea>
				{/* notes */}
				<p>Extra Notes</p>
				<textarea
					name="notes"
					type="text"
					placeholder="Message . . ."
					onChange={e => setFormData({ ...formData, notes: e.target.value })}
				></textarea>
				{/* todos */}
				<p>Todos</p>
				<List
					complete={formData.todos.complete}
					incomplete={formData.todos.incomplete}
					setComplete={newItems =>
						setFormData({
							...formData,
							todos: { ...formData.todos, complete: newItems },
						})
					}
					setIncomplete={newItems =>
						setFormData({
							...formData,
							todos: { ...formData.todos, incomplete: newItems },
						})
					}
				/>
				{/* bugs */}
				<p>Bugs</p>
				<List
					complete={formData.bugs.complete}
					incomplete={formData.bugs.incomplete}
					setComplete={newItems =>
						setFormData({
							...formData,
							bugs: { ...formData.bugs, complete: newItems },
						})
					}
					setIncomplete={newItems =>
						setFormData({
							...formData,
							bugs: { ...formData.bugs, incomplete: newItems },
						})
					}
				/>
				{/* submit */}
				<div className="form-action">
					<button type="submit">Add Project</button>
					<Link type="button" className="cancel" to="/projects">
						Cancel
					</Link>
				</div>
			</form>
		</div>
	);
};

export default NewProject;
