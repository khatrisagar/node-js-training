const express = require("express");
const app = express();
const PORT = 5555;

const db = require("./models");
const userRoutes = require("./routes/user/user.route");

app.use(express.json());
app.use(userRoutes);

// app.get("/", async (req, res) => {
// const resp = await db.User.findAll();
// res.send(resp);
// });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
