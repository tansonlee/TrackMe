import { combineReducers } from "redux";

import projects from "./projects";
import currentProject from "./currentProject";
import account from "./account";
import isDemo from "./demo";

export default combineReducers({
	projects,
	currentProject,
	account,
	isDemo,
});
