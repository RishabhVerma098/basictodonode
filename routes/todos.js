const express = require("express");
const {
  getAllTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todo");

const router = express.Router();

router.route("/").get(getAllTodos).post(createTodo);
router.route("/:id").put(updateTodo).delete(deleteTodo);

module.exports = router;
