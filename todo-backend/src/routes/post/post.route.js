const express = require("express");
const router = express.Router();

const {
  addPost,
  getPosts,
  updatePost,
  deletePost,
  getSinglePost,
} = require("../../controllers/post/post.controller");

router.get("/", getPosts);
router.get("/:id", getSinglePost);
router.post("/", addPost);
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);

module.exports = router;
