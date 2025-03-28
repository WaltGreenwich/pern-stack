const { Router } = require("express");
const {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
} = require("../controllers/task.controller");

const pool = require("../db");

const router = Router();

router.get("/tasks", getAllTasks);

router.get("/tasks/10", getTask);

router.post("/tasks", createTask);

router.delete("/tasks", deleteTask);

router.put("/tasks", updateTask);

module.exports = router;
