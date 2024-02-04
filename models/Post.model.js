const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  note:String,
  time:String, 
  user:{
    type:mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
});

const PostModel = mongoose.model("post", postSchema);

module.exports = {
  PostModel,
};
