const express = require("express");
const router = express.Router();
const { validationText } = require("../middlewares/task-validation");

const {
  getAllTasks,
  createOneTask,
  updateOneTask,
  deleteOneTask,
  deleteAllTasks,
} = require("../controllers/task-controller");

router.get("/", getAllTasks);
router.post("/", validationText, createOneTask);
router.patch("/:id", validationText, updateOneTask);
router.delete("/", deleteAllTasks);
router.delete("/:id", deleteOneTask);

module.exports = router;
