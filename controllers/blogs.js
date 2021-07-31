const User = require("../models/Blog");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../config/env");
const Blog = require("../models/Blog");

exports.create = async (req, res, next) => {
  const { content, category, coverImage, title } = req.body;
  const { _id } = req.user;
  try {
    const blog = await new Blog({
      content,
      category,
      coverImage,
      title,
      userId: _id,
    });
    await blog.save();
    res.json(true);
  } catch (e) {
    console.log(e);
  }
};
exports.edit = async (req, res, next) => {
  const { content, category, coverImage, title } = req.body;
  const { id } = req.params;
  const blog = await Blog.findById(id);
  if (req.user._id.toString() === blog.userId.toString()) {
    if (content) blog.content = content;
    if (category) blog.category = category;
    if (coverImage) blog.coverImage = coverImage;
    if (title) blog.title = title;
    await blog.save();
  }
  res.json(true);
  console.log("edit req.body ==> ", req.body);
  console.log("edit req.user ==> ", req.user);
  console.log("edit params ==> ", req.params);
};
exports.findOne = async (req, res, next) => {
  console.log("findOne req.body ==> ", req.body);
  console.log("findOne req.user ==> ", req.user);
  console.log("findOne params ==> ", req.params);
  const { content, category, coverImage, title } = req.body;
  const { id } = req.params;
  try {
    const blog = await Blog.findById(id).populate("userId", "-password");
    res.json(blog);
  } catch (e) {
    console.log(e);
  }
};
exports.deleteOne = async (req, res, next) => {
  const { id } = req.params;
  try {
    const blogs = await Blog.findOneAndRemove({ _id: id });
    res.json(true);
  } catch (e) {
    console.log(e);
  }
};
exports.findAll = async (req, res, next) => {
  try {
    const blogs = await Blog.find()
      .select("-content")
      .populate("userId", "-password");
    res.json(blogs);
  } catch (e) {
    console.log(e);
  }
};

exports.findUserBlogs = async (req, res, next) => {
  const { _id } = req.user;
  try {
    const blogs = await Blog.find({ userId: _id }).select("-content");
    res.json(blogs);
  } catch (e) {
    console.log(e);
  }
};
