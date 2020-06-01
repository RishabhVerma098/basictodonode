const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please provide title"],
    trim: true,
    maxlength: [50, "length cannot be more than 50"],
    unique: true,
  },
  description: {
    type: String,
    required: [true, "Please provide description"],
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
    default: "low",
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("todo", TodoSchema);
