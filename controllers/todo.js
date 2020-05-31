const ErrorHandler = require("../utils/errorHandler.js");

/**
 * @description get all todos of the logged in user
 * @param route GET /api/v1/todos
 * @param access PRIVATE
 */
exports.getAllTodos = async (req, res, next) => {
  try {
    res.status(200).json({
      sucess: true,
      data: "all todos",
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @description create todo
 * @param route POST /api/v1/todos
 * @param access PRIVATE
 */
exports.createTodo = async (req, res, next) => {
  try {
    res.status(200).json({
      sucess: true,
      data: "create todo",
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @description update todo
 * @param route PUT /api/v1/todos/:id
 * @param access PRIVATE
 */
exports.updateTodo = async (req, res, next) => {
  try {
    res.status(200).json({
      sucess: true,
      data: "update todo",
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @description delete todo
 * @param route delete /api/v1/todos/:id
 * @param access PRIVATE
 */
exports.deleteTodo = async (req, res, next) => {
  try {
    res.status(200).json({
      sucess: true,
      data: "delete todo",
    });
  } catch (error) {
    next(error);
  }
};
