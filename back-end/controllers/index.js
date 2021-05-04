import Project from "../models/project.js";
import mongoose from "mongoose";

export const getAllProjects = async (req, res) => {
	const { email } = req.params;
	try {
		const allProjects = await Project.find({ email: email });
		res.status(200).json({ data: allProjects });
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

export const createProject = async (req, res) => {
	const project = req.body;
	const newProject = new Project(project);

	try {
		await newProject.save();
		res.status(201).json({ project: newProject });
	} catch (error) {
		res.status(409).json({ message: error.message });
	}
};

export const deleteProject = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

	await Project.findByIdAndRemove(id);

	res.json({ message: "Post deleted successfully." });
};

export const updateProject = async (req, res) => {
	const project = req.body;

	try {
		const updatedProject = await Project.findByIdAndUpdate(project._id, project, { new: true });
		res.status(201).json({ project: updatedProject });
	} catch (error) {
		res.status(409).json({ message: error });
	}
};
