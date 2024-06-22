const db = require("../db");

// Get all tasks
exports.getAllTasks = (req, res) => {
  const sql = "SELECT * FROM tasks";
  db.query(sql, (err, results) => {
    if (err) {
      console.error("Error getting tasks:", err);
      res.status(500).json({ error: "Failed to get tasks" });
    } else {
      console.log("Tasks retrieved:", results);
      res.json(results);
    }
  });
};

// Create a new task
exports.createTask = (req, res) => {
  const newTask = req.body;
  const sql = "INSERT INTO tasks SET ?";
  db.query(sql, newTask, (err, result) => {
    if (err) {
      console.error("Error creating task:", err);
      res.status(500).json({ error: "Failed to create task" });
    } else {
      const createdTask = { id: result.insertId, ...newTask };
      console.log("Task created:", createdTask);
      res.json(createdTask);
    }
  });
};

// Update a task
exports.updateTask = (req, res) => {
  const { id } = req.params;
  const updatedTask = req.body;

  // Remove the editing property
  delete updatedTask.editing;

  const sql = "UPDATE tasks SET ? WHERE id = ?";

  console.log("Request to update task with ID:", id); // Log the task ID
  console.log("Data received for update:", updatedTask); // Log the updated task data

  db.query(sql, [updatedTask, id], (err, result) => {
    if (err) {
      console.error("Error updating task:", err);
      res.status(500).json({ error: "Failed to update task" });
    } else {
      console.log("Task updated successfully:", result);
      res.json({ id, ...updatedTask });
    }
  });
};

// Delete a task
exports.deleteTask = (req, res) => {
  const { id } = req.params;
  const sql = "DELETE FROM tasks WHERE id = ?";
  db.query(sql, id, (err, result) => {
    if (err) {
      console.error("Error deleting task:", err);
      res.status(500).json({ error: "Failed to delete task" });
    } else {
      console.log("Task deleted:", result);
      res.json(result);
    }
  });
};
