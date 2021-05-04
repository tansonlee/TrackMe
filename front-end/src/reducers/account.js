const reducer = (account = {}, action) => {
	switch (action.type) {
		case "LOGIN":
			return action.payload;
		case "LOGOUT":
			return {};
		default:
			return account;
	}
};

export default reducer;
