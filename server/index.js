const express = require("express");
const cors = require("cors");
const { Router } = require("express");
require("dotenv").config();
const PORT = 5000 || process.env.PORT;
const router =express.Router()

const app = express();
app.use(cors());
app.get("/", (req, res) => {
  res.send("Welcome to Developer Times server");
});

 app.use('/api', require("./Routes/Categories"));


app.listen(PORT, () => {
  console.log(`Server is running on : ${PORT}`);
});
