import axios from "axios";
// this file sends api sends api for request for task resources

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const TASK_ENDPOINT = "/api/tasks";

//fronend requests
//sending request

//getv |get all the task

export const getTasks = () => {
  const response = axios
    .get(API_BASE_URL + TASK_ENDPOINT)
    .then((res) => res.data)
    .catch((error) => error);
  return response;
};

//post | cretae a task
export const createTask = (taskobject) => {
  const response = axios
    .post(API_BASE_URL + TASK_ENDPOINT, taskobject)
    .then((res) => res.data)
    .catch((error) => error);
  return response;
};

//delete
export const deleteTaskRequest = (id) => {
  const response = axios
    .delete(API_BASE_URL + TASK_ENDPOINT + `/${id}`)
    .then((res) => res.data)
    .catch((error) => error);

  return response;
};

//update the task entry type
export const updateTaskList = (id, updateTask) => {
  const response = axios
    .patch(API_BASE_URL + TASK_ENDPOINT, +(`/${id}`, updateTask))
    .then((res) => res.data)
    .catch((error) => error);
  return response;
};
