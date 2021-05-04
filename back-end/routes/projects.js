import express from "express";

import {
	getAllProjects,
	createProject,
	deleteProject,
	updateProject,
} from "../controllers/index.js";

const router = express.Router();

router.get("/:email", getAllProjects);
router.post("/", createProject);
router.delete("/:id", deleteProject);
router.patch("/", updateProject);

export default router;
