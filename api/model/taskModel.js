//this file has fucntions to execute queries
//database operation
//CRUD operation ----> Task Resources

import taskModel from "../../schema/taskSchema.js";

//read
export const getTasks = () => {
  return taskModel.find();
};

//read one
export const getTask = (id) => {
  return taskModel.findbyId(id);
};

//create
export const createTask = (taskObject) => {
  return taskModel(taskObject).save();
};

//update
export const updateTask = (id, updateData) => {
  return taskModel.findbyIdAndUpdate(id, updateData);
};

//delete
export const deleteTask = (id) => {
  return taskModel.findbyIdAndDelete(id);
};
