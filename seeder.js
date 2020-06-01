const fs = require("fs");
const colors = require("colors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./config/config.env" });

//load model schema
const TodoModel = require("./models/todo");
const UserModel = require("./models/user");

//connectToDB
mongoose.connect(process.env.DATABASE_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

//readJsonFile
const todo = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/todo.json`, "utf-8")
);
const user = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/user.json`, "utf-8")
);

//Populate database
const ImportData = async () => {
  try {
    await UserModel.create(user);
    await TodoModel.create(todo);
    console.log(`Data Imported `.green.inverse);
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

//Delete everything from database
const DeleteData = async () => {
  try {
    await UserModel.deleteMany();
    await TodoModel.deleteMany();
    console.log("Data Deleted".red.inverse);
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

//args setup CLI

if (process.argv[2] === ("-i" || "-import")) {
  ImportData();
} else if (process.argv[2] === ("-d" || "-delete")) {
  DeleteData();
}
