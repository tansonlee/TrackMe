const reducer = (projects = [], action) => {
	switch (action.type) {
		case "FETCH_ALL":
			return action.payload;
		case "CREATE":
			return [...projects, action.payload];
		case "RESET":
			return [];
		case "DELETE":
			return projects.filter(p => p._id !== action.payload);
		case "UPDATE":
			return [action.payload, ...projects.filter(p => p._id !== action.payload._id)];
		case "SET_ALL":
			return action.payload;
		default:
			return projects;
	}
};

export default reducer;
