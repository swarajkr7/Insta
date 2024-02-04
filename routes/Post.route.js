const express = require("express");
const { PostModel } = require("../models/Post.model");
const { UserModel } = require("../models/User.model");
const postRouter = express.Router();

postRouter.get("/post", async(req, res) => {
  const posts = await  PostModel.find().populate('user');
  res.send(posts);
  console.log(posts)
});

postRouter.post("/create", async (req, res) => {
  const payload = req.body;
  try {
    const new_post = new PostModel(payload);
    await new_post.save();
    res.send("Created the note");
  } catch (err) {
    console.log(err);
    res.send({ msg: "Something went wrong" });
  }
});

postRouter.get("/feed", (req, res) => {
  const token = req.headers.authorization;
  jwt.verify(token, "masai", (err, decoded) => {
    if (err) {
      res.send("Invalid Token");
      console.log(err);
    } else {
      res.send("Feed Page");
    }
  });
});

postRouter.delete("/delete/:id", (req, res) => {
  res.send("Deleted the note");
});

module.exports = {
  postRouter,
};
