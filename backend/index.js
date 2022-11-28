const exppress = require("express");
const dotenv = require("dotenv");
dotenv.config();
const employeeRoutes = require("./routes/employeeRoute");

const app = exppress();
const port = process.env.PORT || 5000;
const databaseConnection = require("./db");
//database connection

databaseConnection();

//middleware
app.use(exppress.json());

//API
app.use("./api/employee", employeeRoutes);
//port
app.listen(port, () => {
  console.log("Server is connected at port " + port);
});
