const express = require("express");

require("dotenv").config({ path: "./.env.development" });
const PORT = process.env.PORT || 7979;
const app = express();
const cors = require("cors");

app.use(
  cors({
    origin: "*",
  })
);
console.log("process.env", process.env.PORT);
app.use(express.json());

const postRoutes = require("./src/routes/post/post.route");
app.use("/posts", postRoutes);

const commentsRoutes = require("./src/routes/comment/comment.route");
app.use("/comments", commentsRoutes);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
