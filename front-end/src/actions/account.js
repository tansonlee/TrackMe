export const login = account => dispatch => {
	dispatch({ type: "LOGIN", payload: account });
};

export const logout = () => dispatch => {
	dispatch({ type: "LOGOUT", payload: {} });
};
