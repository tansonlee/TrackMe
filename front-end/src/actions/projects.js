import * as api from "../api/project";

export const getAllProjects = email => async dispatch => {
	try {
		const data = await api.fetchProjectData(email);
		dispatch({ type: "FETCH_ALL", payload: data });
	} catch (error) {
		console.log(error);
	}
};

export const setAllProjects = projects => dispatch => {
	dispatch({ type: "SET_ALL", payload: projects });
};

export const createProject = project => async dispatch => {
	try {
		const newProject = await api.createProject(project);
		dispatch({ type: "CREATE", payload: newProject });
	} catch (error) {
		console.log(error);
	}
};

export const resetProjects = () => dispatch => {
	dispatch({ type: "RESET" });
};

export const deleteProject = id => async dispatch => {
	await api.deleteProject(id);
	dispatch({ type: "DELETE", payload: id });
};

export const updateProject = project => async dispatch => {
	try {
		const updatedProject = await api.updateProject(project);
		dispatch({ type: "UPDATE", payload: updatedProject });
	} catch (error) {
		console.log(error);
	}
};
