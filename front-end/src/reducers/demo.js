const reducer = (isDemo = false, action) => {
	switch (action.type) {
		case "SET_DEMO":
			return action.payload;
		default:
			return isDemo;
	}
};

export default reducer;
