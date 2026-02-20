const { Task } = require("../models/task");

const getTasks = async () => {
  const tasks = await Task.find();
  return tasks;
};

const createTask = async (text) => {
  const newTask = new Task({ text });
  const savedTask = await newTask.save();

  return savedTask;
};

const updateTask = async (id, text) => {
  const updatedTask = await Task.findByIdAndUpdate(
    id,
    { text },
    { new: true },
  );

  return updatedTask;
};

const deleteTask = async (id) => {
  const deletedTask = await Task.findByIdAndDelete(id);
  return deletedTask;
};

const deleteTasks = async (id) => {
  const deletedTasksCount = await Task.deleteMany();
  return deletedTasksCount;
};

module.exports = {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
  deleteTasks,
};
