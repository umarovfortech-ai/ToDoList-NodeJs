const mongoose = require("mongoose");
const { Schema } = mongoose;

const taskSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  isCheck: {
    type: Boolean,
    default: false,
  },
});

const Task = mongoose.model("Tasks", taskSchema);
module.exports = { Task };
