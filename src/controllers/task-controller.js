const {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} = require("../services/task-services");

const getAllTasks = async (req, res) => {
  try {
    const tasks = await getTasks();
    res.status(200).send(tasks);
  } catch (error) {
    res.status(400).send(error);
  }
};

const createOneTask = async (req, res) => {
  try {
    const { text } = req.body;
    const task = await createTask(text);
    res.status(200).send(task);
  } catch (error) {
    res.status(400).send("Failed to create task");
  }
};

const updateOneTask = async (request, response) => {
  const { id, text } = request.body;
  try {
    const updatedTask = await updateTask(id, text);
    response.status(200).send(updatedTask);
  } catch (error) {
    console.log(error);
    response.status(400).send("Failed to update task");
  }
};

const deleteOneTask = async (request, response) => {
  try {
    const { id } = request.body;
    const deletedTask = await deleteTask(id);
    response.status(200).send(deletedTask);
  } catch (error) {
    response.status(400).send("Failed to delete");
  }
};

module.exports = { getAllTasks, createOneTask, updateOneTask, deleteOneTask };
