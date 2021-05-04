const reducer = (currentProject = "", action) => {
	switch (action.type) {
		case "CHANGE":
			return action.payload;
		case "RESET":
			return "";
		default:
			return currentProject;
	}
};

export default reducer;
