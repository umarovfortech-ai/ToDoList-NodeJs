const express = require("express");
const router = express.Router();
const { validationText } = require("../middlewares/task-validation");

const {
  getAllTasks,
  createOneTask,
  updateTaskText,
  updateTaskState,
  deleteOneTask,
  deleteAllTasks,
} = require("../controllers/task");

router.get("/task", getAllTasks);
router.post("/task", validationText, createOneTask);
router.patch("/task/text/:id", validationText, updateTaskText);
router.patch("/task/state/:id", updateTaskState);
router.delete("/task", deleteAllTasks);
router.delete("/task/:id", deleteOneTask);

module.exports = router;
