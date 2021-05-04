import React, { useState } from "react";
import "../EditAndNew.css";
import { useHistory, Link } from "react-router-dom";

import List from "../List/List";

import { updateProject } from "../../../actions/projects";
import { useDispatch, useSelector } from "react-redux";

const EditPage = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const account = useSelector(state => state.account);
	const currentProject = useSelector(state => state.currentProject);
	const allProjects = useSelector(state => state.projects);
	const currentProjectContent = allProjects?.filter(p => p._id === currentProject);
	const [formData, setFormData] = useState(currentProjectContent[0]);

	if (!account?.email) {
		return <h2 className="signin-warning">You must sign in to edit a project</h2>;
	}

	const handleSubmit = e => {
		e.preventDefault();

		if (!account) {
			console.log("not logged in");
			return;
		}

		dispatch(updateProject({ ...formData, email: account.email }));
		// setFormData(currentProjectContent);

		history.push("/projects");
	};

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
					value={formData.name}
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
						onClick={() => setFormData({ ...formData, status: "unstarted" })}
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
					value={formData.link}
				/>
				{/* description */}
				<p>Project Description</p>
				<textarea
					name="description"
					type="text"
					placeholder="Description . . ."
					onChange={e => setFormData({ ...formData, description: e.target.value })}
					value={formData.description}
				></textarea>
				{/* notes */}
				<p>Extra Notes</p>
				<textarea
					name="notes"
					type="text"
					placeholder="Message . . ."
					onChange={e => setFormData({ ...formData, notes: e.target.value })}
					value={formData.notes}
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
					<button type="submit">Update Project</button>
					<Link type="button" className="cancel" to="/projects">
						Cancel
					</Link>
				</div>
			</form>
		</div>
	);
};

export default EditPage;
