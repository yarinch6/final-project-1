const User = require("../models/user.model");

const getAll = async () => {
  return await User.find();
};

const getUserById = async (id) => {
  return await User.findById(id);
};
const getUserByUsernameOrEmail = async (username, email) => {
  return await User.findOne({ $or: [{ username: username }, { email: email }] });
};

const addUser = async (user) => {
  console.log("inside USERSERVICE")
  const username = user.username;
  const password = user.password;
  const newUser = new User({ username , password });
  return await newUser.save();
};
const updateUser = async (id, user) => {
  return await User.findByIdAndUpdate(id, user, { new: true });
};
const deleteUser = async (id) => {
  return await User.findByIdAndDelete(id);
};
module.exports = { getAll, getUserById, addUser, getUserByUsernameOrEmail, updateUser, deleteUser };
