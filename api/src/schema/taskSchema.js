import mongoose from "mongoose";

const taskSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  timetoComplete: {
    type: Number,
    required: true,
  },

  type: {
    type: String,
    default: "Entry",
  },

  difficulty: {
    type: String,
    default: "Easy",
  },

  priority: {
    type: String,
    default: "Low",
  },
});

const taskModel = mongoose.model("task", taskSchema);
export default taskModel;
