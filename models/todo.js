const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    validate: [true, "Please provide title"],
    trim: true,
    maxlength: [50, "length cannot be more than 50"],
  },
  description: {
    type: String,
    required: true,
    validate: [true, "Please provide description"],
    maxlength: [200, "length cannot be more than 200"],
  },
  status: {
    type: Boolean,
    default: false,
  },
  reminder: {
    type: Date,
  },
  Priority: {
    type: [String],
    enum: ["high", "medium", "low"],
    default: low,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("todo", TodoSchema);
