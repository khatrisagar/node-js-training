const db = require("../../models");

// get comments controller

const getComments = async (req, res) => {
  try {
    const postId = req.params.id;
    const posts = await db.Comment.findAll({ where: { postId: postId } });
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json(error);
  }
};

// add comments controller
const addComment = async (req, res) => {
  try {
    const { postId, name, email, body } = req.body;
    const post = await db.Comment.create({
      postId,
      name,
      email,
      body,
    });
    res.status(201).json({ message: "post added successfully", post });
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  getComments,
  addComment,
};
