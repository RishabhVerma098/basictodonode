const ErrorHandler = require("../utils/errorHandler.js");
const todoModel = require("../models/todo");
/**
 * @description get all todos of the logged in user
 * @param route GET /api/v1/todos
 * @param access PRIVATE
 */
exports.getAllTodos = async (req, res, next) => {
  try {
    const todos = await todoModel.find();

    res.status(200).json({
      sucess: true,
      data: todos,
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
    const todo = await todoModel.create(req.body);

    res.status(200).json({
      sucess: true,
      data: todo,
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
    const todo = await todoModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!todo) {
      next(new ErrorHandler(`todo not found at id:${req.params.id}`, 400));
    }

    res.status(200).json({
      sucess: true,
      data: todo,
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
    const todo = await todoModel.findById(req.params.id);
    if (!todo) {
      next(new ErrorHandler(`todo not found at id:${req.params.id}`, 400));
    }

    todo.remove();

    res.status(200).json({
      sucess: true,
      data: todo,
    });
  } catch (error) {
    next(error);
  }
};
