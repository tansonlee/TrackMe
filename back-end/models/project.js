import mongoose from "mongoose";

const projectSchema = mongoose.Schema({
	name: String,
	email: String,
	status: String,
	link: String,
	description: String,
	notes: String,
	todos: {
		complete: {
			type: [String],
			default: [],
		},
		incomplete: {
			type: [String],
			default: [],
		},
	},
	bugs: {
		complete: {
			type: [String],
			default: [],
		},
		incomplete: {
			type: [String],
			default: [],
		},
	},
	date: {
		type: Date,
		default: new Date(),
	},
});

const Project = mongoose.model("Project", projectSchema);

export default Project;
