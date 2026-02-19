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
router.patch("/", updateOneTask);
router.delete("/", deleteOneTask);

module.exports = router;
