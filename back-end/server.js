import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import rootRoutes from "./routes/root.js";
import projectRoutes from "./routes/projects.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use("/", rootRoutes);
app.use("/projects", projectRoutes);

const CONNECTION_URL = `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.vgh0f.mongodb.net/projects?retryWrites=true&w=majority`;
const PORT = process.env.PORT || 5000;

mongoose
	.connect(CONNECTION_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => app.listen(PORT, () => console.log(`listening on port: ${PORT}`)))
	.catch(error => console.log(error));

mongoose.set("useFindAndModify", false);
