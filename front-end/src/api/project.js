import axios from "axios";

// const URL = "http://localhost:5000/projects";
const URL = "https://trackme-backend.herokuapp.com/projects";

export const fetchProjectData = async email => {
	try {
		const { data } = await axios.get(`${URL}/${email}`);
		return data.data;
	} catch (error) {
		console.log(error);
	}
};

export const createProject = async newProject => {
	try {
		const { data } = await axios.post(URL, newProject);
		return data.project;
	} catch (error) {
		console.log(error);
	}
};

export const deleteProject = async id => {
	try {
		axios.delete(`${URL}/${id}`);
	} catch (error) {
		console.log(error);
	}
};

export const updateProject = async project => {
	try {
		const { data } = await axios.patch(`${URL}`, project);
		// data;
		return data.project;
	} catch (error) {
		console.log(error);
	}
};
