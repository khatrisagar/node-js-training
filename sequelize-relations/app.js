const express = require("express");
const app = express();
const PORT = 6666;

const db = require("./models");
const userRoutes = require("./routes/user/user.route");
const itemRoutes = require("./routes/item/item.route");

app.use(express.json());
app.use("/users", userRoutes);
app.use("/items", itemRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
