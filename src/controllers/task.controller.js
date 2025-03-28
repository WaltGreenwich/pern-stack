const pool = require("../db");

const getAllTasks = async (req, res) => {
  res.send("retrieven a list of task");
};

const getTask = async (req, res) => {
  res.send("retrieving a single task");
};

const createTask = async (req, res) => {
  const { title, description } = req.body;

  const result = await pool.query(
    "INSERT INTO task (title, description) VALUES ($1, $2) RETURNING *",
    [title, description]
  );

  res.json(result.rows[0]);
};

const updateTask = async (req, res) => {
  res.send("update a task");
};

const deleteTask = async (req, res) => {
  res.send("delete a task");
};

module.exports = {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
};
