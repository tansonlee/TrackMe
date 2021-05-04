export const setDemo = demoState => dispatch => {
	dispatch({ type: "SET_DEMO", payload: demoState });
};
