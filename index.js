const express = require("express");
const app = express();
const connectDb = require("./config/db");
const crudOperations = require("./routes/crudOperations");
connectDb();
app.use(express.json());

app.use("/", crudOperations);

app.listen(8080, (e) => {
  if (!e) console.log("server running on port 8080");
  else console.error(e);
});
