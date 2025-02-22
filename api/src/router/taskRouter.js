import express from "express";
import {
  createTask,
  deleteTask,
  getTask,
  getTasks,
  updateTask,
} from "../model/taskModel.js";

const taskRouter = express.Router();

//index | Get tasks
taskRouter.get("/", (req, res) => {
  getTasks()
    .then((tasks) => {
      res.json({
        status: "success",
        data: tasks,
      });
    })
    .catch((error) => {
      res.json({
        status: "error",
        error: error.message || "could not fetch data",
      });
    });
});

//id | get single task
taskRouter.get("/:id", (req, res) => {
  getTask(req.params.id)
    .then((task) => {
      res.json({
        status: "success",
        data: task,
      });
    })
    .error((error) => {
      res.json({
        status: "error",
        data: error.message || "could not fetch data",
      });
    });
});

//create | post single task
taskRouter.post("/", (req, res) => {
  const taskObject = req.body;

  createTask(taskObject)
    .then((task) => {
      res.json({
        status: "success",
        message: "task created",
        data: task,
      });
    })
    .catch((error) => {
      res.json({
        status: "error",
        error: error.message || "could not fetch data",
      });
    });
});

//update | patch single task
taskRouter.patch("/:id", (req, res) => {
  const updatedTask = req.body;
  const id = req.params.id;

  updateTask(id, updatedTask)
    .then((task) => {
      res.json({
        status: "success",
        data: task,
      });
    })

    .catch((error) => {
      res.json({
        status: "error",
        data: error.message || "could not fetch data",
      });
    });
});

//delete | delete single task
taskRouter.delete("/:id", (req, res) => {
  deleteTask(req.params.id)
    .then((task) => {
      res.json({
        status: "success",
        message: "task deleted",
        data: task,
      });
    })
    .error((error) => {
      res.json({
        status: "error",
        data: error.message || "could not fetch data",
      });
    });
});

export default taskRouter;
