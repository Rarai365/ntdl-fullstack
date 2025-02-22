import express from "express";
import cors from "cors";
import { connectToMongoDb } from "./src/config/dbConfig.js";
import taskRouter from "./src/router/taskRouter.js";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT || 8000;
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

//task routes
app.use("/api/tasks", taskRouter);

//START THE SERVER
app.listen(PORT, (error) => {
  error
    ? console.log("Error", error)
    : console.log("Your server is running at http://localhost:" + PORT);
});
