const express = require("express");
const router = express.Router();

const {
  getComments,
  addComment,
} = require("../../controllers/comments/comments.controller");
router.get("/:id", getComments);
router.post("/", addComment);

module.exports = router;
