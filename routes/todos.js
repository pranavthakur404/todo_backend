const createTodo = require("../controller/createTodo");
const getTodos = require("../controller/getTodos");
const getTodosById = require("../controller/getTodoById");
const udpateTodo = require("../controller/updateTodo");
const deleteTodo = require("../controller/deleteTodo");

const express = require("express");
const router = express.Router();

// mapping route with controller
router.post("/createTodo", createTodo); // post request hai ha yh
router.get("/getTodos", getTodos);
router.get("/getTodos/:id", getTodosById);
router.put("/updateTodo/:id", udpateTodo);
router.delete("/deleteTodo/:id", deleteTodo);

module.exports = router;
