const {
  getTasks,
  createTask,
  updateOneTaskText,
  updateOneTaskState,
  deleteTask,
  deleteTasks,
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

const updateTaskText = async (req, res) => {
  try {
    const { text } = req.body;
    const { id } = req.params;

    const updatedTask = await updateOneTaskText(id, text);
    res.status(200).send(updatedTask);
  } catch (error) {
    res.status(400).send({
      message: "Failed to get the task",
      statusCode: 400,
    });
  }
};

const updateTaskState = async (req, res) => {
  try {
    const { isCheck } = req.body;
    const { id } = req.params;

    const updatedTask = await updateOneTaskState(id, isCheck);
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

const deleteAllTasks = async (req, res) => {
  try {
    const deleteResult = await deleteTasks();
    res.status(200).send(deleteResult);
  } catch (error) {
    res.status(400).send({
      message: "Failed to delete all the tasks",
      statusCode: 400,
    });
  }
};

module.exports = {
  getAllTasks,
  createOneTask,
  updateTaskText,
  updateTaskState,
  deleteOneTask,
  deleteAllTasks,
};
