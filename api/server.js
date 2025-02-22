import express from "express";
import { connectToMongoDb } from "./src/config/dbConfig.js";
import taskRouter from "./src/router/taskRouter.js";

const app = express();
const PORT = 8000;
//middleware to parse request
app.use(express.json());

//connect to Mongo db
connectToMongoDb();

//task routes
app.use("/api/tasks", taskRouter);

//START THE SERVER
app.listen(PORT, (error) => {
  error
    ? console.log("Error", error)
    : console.log("Your server is running at http://localhost:" + PORT);
});
