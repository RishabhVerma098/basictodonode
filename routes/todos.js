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
const { protectRoute } = require("../middleware/auth");

router
  .route("/")
  .get(protectRoute, advanceFiltering(todoModel, "user"), getAllTodos)
  .post(protectRoute, createTodo);
router.route("/:id").put(updateTodo).delete(deleteTodo);

module.exports = router;
