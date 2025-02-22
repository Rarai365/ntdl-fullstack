import "dotenv/config";
import path from "path";
import express from "express";
import cors from "cors";
import { connectToMongoDb } from "./src/config/dbConfig.js";
import taskRouter from "./src/router/taskRouter.js";

const _dirname = path.resolve();

const app = express();
const PORT = process.env.PORT || 3000;
//middleware to parse request
app.use(express.json());

//define confisg for CORS
const corsOption = {
  credentials: true,
  origin: true, //is an arrray with the list of whitelisted domains
};
app.use(cors(corsOption));

//connect to Mongo db
connectToMongoDb();

//SSR- Serve frontend usign node.js server
app.use("/", express.static(path.join(_dirname, "dist")));

//task routes
app.use("/api/tasks", taskRouter);

//START THE SERVER
app.listen(PORT, (error) => {
  error
    ? console.log("Error", error)
    : console.log("Your server is running at http://localhost:" + PORT);
});
