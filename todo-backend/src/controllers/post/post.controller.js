const db = require("../../models");

// get post controller

const getPosts = async (req, res) => {
  try {
    const posts = await db.Post.findAll();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getSinglePost = async (req, res) => {
  try {
    const posts = await db.Post.findAll({ where: { id: req.params.id } });
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json(error);
  }
};

// add post controller
const addPost = async (req, res) => {
  try {
    const { userId, title, body } = req.body;

    const post = await db.Post.create({
      userId: 3,
      title,
      body,
    });
    res.status(201).json({ message: "post added successfully", post });
  } catch (err) {
    res.status(500).json(err);
  }
};

// update post controller

const updatePost = async (req, res) => {
  try {
    await db.Post.update({ ...req.body }, { where: { id: req.params.id } });
    res.status(200).json({ message: "Post Updated successfully" });
  } catch (error) {
    res.status(500).json(error);
  }
};

// delete post

const deletePost = async (req, res) => {
  try {
    await db.Comment.destroy({
      where: {
        postId: req.params.id,
      },
    });
    await db.Post.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

module.exports = { addPost, getPosts, updatePost, deletePost, getSinglePost };
