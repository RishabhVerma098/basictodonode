const express = require("express");
const {
  getAllTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todo");

const router = express.Router();

//import middleware and model
const advanceFiltering = require("../middleware/advancefiltering");
const todoModel = require("../models/todo");

router
  .route("/")
  .get(advanceFiltering(todoModel), getAllTodos)
  .post(createTodo);
router.route("/:id").put(updateTodo).delete(deleteTodo);

module.exports = router;
