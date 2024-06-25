const prisma = require("../db");

exports.getTasks = async (req, res) => {
  try {
    const tasks = await prisma.task.findMany();
    res.json(tasks);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.addTask = async (req, res) => {
  const { title, description } = req.body;
  try {
    const newTask = await prisma.task.create({
      data: {
        title,
        description,
        completed: false,
      },
    });
    res.status(201).json(newTask);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.updateTask = async (req, res) => {
  const { id } = req.params;
  const { title, description, completed } = req.body;
  try {
    const updatedTask = await prisma.task.update({
      where: { id: parseInt(id, 10) },
      data: { title, description, completed },
    });
    res.json(updatedTask);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.task.delete({
      where: { id: parseInt(id, 10) },
    });
    res.status(204).send();
  } catch (err) {
    res.status(500).send(err.message);
  }
};
