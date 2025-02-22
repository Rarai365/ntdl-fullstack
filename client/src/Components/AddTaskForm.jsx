import { useState } from "react";
import { generateRandomID } from "../Utility /generateRandom";

const AddTaskForm = (props) => {
  const { setTaskList } = props;

  const [taskName, setTaskName] = useState("");
  const [taskTime, setTaskTime] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();

    //step 1: Build the task object
    const taskObject = {
      taskName: taskName,
      taskTime: taskTime,
      type: "entry",
      id: generateRandomID(),
    };

    setTaskList((prevState) => [...prevState, taskObject]); //...prevState :Spread operator

    setTaskName("");
    setTaskTime("");
  };

  //handle on Task name input change

  const handleOnTaskNameChange = (e) => {
    const inputValue = e.target.value;

    setTaskName(inputValue);
  };

  //handle on tasktime

  const handleOnTaskTimeChange = (e) => {
    const inputValue = e.target.value;
    setTaskTime(inputValue);
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <div className="d-flex flex-column gap-4">
        {/* <!-- this is for Entering the taks name --> */}
        <input
          type="text"
          className="form-control"
          placeholder="Enter task name"
          name="taskName"
          onChange={handleOnTaskNameChange}
          value={taskName}
          required
        />

        {/* <!-- this is for entering the hour spent --> */}

        <input
          type="number"
          className="form-control"
          placeholder="Enter Time spent in Hrs"
          name="taskTime"
          min="1"
          max="24"
          onChange={handleOnTaskTimeChange}
          value={taskTime}
          required
        />

        {/* <!-- this is for the submit button --> */}

        <button type="submit" className="btn btn-primary">
          Add Task
        </button>
      </div>
    </form>
  );
};

export default AddTaskForm;
