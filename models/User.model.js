const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  email: String,
  fullname: {
    type:String,
    required: true
  },
  username: String,
  password: String,
});

const UserModel = mongoose.model("user", userSchema);

module.exports = {
  UserModel,
};
