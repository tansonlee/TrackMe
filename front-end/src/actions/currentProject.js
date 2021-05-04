export const changeCurrentProject = projectId => dispatch => {
	dispatch({ type: "CHANGE", payload: projectId });
};

export const resetCurrentProject = () => dispatch => {
	dispatch({ type: "RESET" });
};
