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
    res.status(400).send({
      message: "Failed to get the task",
      statusCode: 400,
    });
  }
};

const createOneTask = async (req, res) => {
  try {
    const { text } = req.body;

    const task = await createTask(text);
    res.status(201).send(task);
  } catch (error) {
    res.status(400).send({
      message: "Failed to create the task",
      statusCode: 400,
    });
  }
};

const updateOneTask = async (req, res) => {
  const { text } = req.body;
  const { id } = req.params;

  try {
    const updatedTask = await updateTask(id, text);
    res.status(200).send(updatedTask);
  } catch (error) {
    res.status(400).send({
      message: "Failed to get the task",
      statusCode: 400,
    });
  }
};

const deleteOneTask = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTask = await deleteTask(id);
    res.status(204).send(deletedTask);
  } catch (error) {
    res.status(400).send({
      message: "Failed to delete the task",
      statusCode: 400,
    });
  }
};

module.exports = { getAllTasks, createOneTask, updateOneTask, deleteOneTask };
