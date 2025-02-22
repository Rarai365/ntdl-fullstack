//this file has fucntions to execute queries
//database operation
//CRUD operation ----> Task Resources

import taskModel from "../schema/taskSchema.js";

//read
export const getTasks = () => {
  return taskModel.find();
};

//read one
export const getTask = (id) => {
  return taskModel.findById(id);
};

//create
export const createTask = (taskObject) => {
  return taskModel(taskObject).save();
};

//update
export const updateTask = (id, updateData) => {
  return taskModel.findByIdAndUpdate(id, updateData);
};

//delete
export const deleteTask = (id) => {
  return taskModel.findByIdAndDelete(id);
};
