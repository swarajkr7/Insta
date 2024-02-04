const express = require("express");
const { connection } = require("./configs/db");
const { userRouter } = require("./routes/User.route");
const {authenticate}=require("./middleware/aunthenticate.middleware")
const { postRouter } = require("./routes/Post.route");
const cors = require("cors");



const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to Instagram");
});

app.use("/users", userRouter);
app.use(authenticate)
app.use("/posts", postRouter);

app.listen(2002, async () => {
  try {
    await connection;
    console.log("Connected to the DB");
  } catch (err) {
    console.log("Trouble connecting to the DB");
    console.log(err);
  }
  console.log("Server is running at port 2002");
});
