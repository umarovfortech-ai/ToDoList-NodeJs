const express = require("express");
const router = express.Router();
const { validationText } = require("../middlewares/task-validation");

const {
  getAllTasks,
  createOneTask,
  updateOneTask,
  deleteOneTask,
} = require("../controllers/task-controller");

router.get("/", getAllTasks);
router.post("/", validationText, createOneTask);
router.patch("/:id", validationText, updateOneTask);
router.delete("/:id", deleteOneTask);

module.exports = router;
