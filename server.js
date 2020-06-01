const express = require("express");
const color = require("colors");
const dotenv = require("dotenv");
const morgan = require("morgan");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./docs.json");
const app = express();

//scurity imports
const mongoSanitize = require("express-mongo-sanitize");
const helmet = require("helmet");
const xss = require("xss-clean");
const hpp = require("hpp");
const rateLimit = require("express-rate-limit");
const cors = require("cors");

//import dotenv and others
dotenv.config({ path: "./config/config.env" });
const errorHandler = require("./middleware/errorHandler");
const connectDB = require("./config/db");

//routes import
var options = {
  customCss: ".swagger-ui .topbar { display: none }",
};
const todos = require("./routes/todos");
const user = require("./routes/user");
app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));

//sccurity middleware
app.use(mongoSanitize());
app.use(helmet());
app.use(xss());

const rate = rateLimit({
  windowMs: 10 * 60 * 1000, //10 min
  max: 100,
});
app.use(rate);
app.use(hpp());
app.use(cors());

//middlewares and routes
app.use(morgan("dev"));
app.use(express.json());
app.use("/api/v1/todos", todos);
app.use("/api/v1/auth", user);
app.use(errorHandler);

//connect to database
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
