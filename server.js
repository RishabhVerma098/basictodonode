const express = require("express");
const color = require("colors");
const dotenv = require("dotenv");
const morgan = require("morgan");
const app = express();

//import dotenv and others
dotenv.config({ path: "./config/config.env" });
const errorHandler = require("./middleware/errorHandler");
const connectDB = require("./config/db");

//routes import
const todos = require("./routes/todos");

//middlewares and routes
app.use(morgan("dev"));
app.use(express.json());
app.use("/api/v1/todos", todos);
app.use(errorHandler);
connectDB();

const port = process.env.PORT || 5000;

app.listen(
  port,
  console.log(
    `Server is running in ${process.env.NODE_ENV} on ${port}`.yellow.bold
  )
);
//crash app on some unprocessed error
process.on("unhandledRejection", (err, promisee) => {
  console.log(`Error : ${err.message}`.red.bold);
  server.close(() => process.exit(1));
});
