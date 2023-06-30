const express = require("express");
const app = express();
const PORT = 9999;
const cors = require("cors");

app.use(cors());
app.use(express.json());

const customerRoutes = require("./routes/customer/customer.route.js");
app.use("/api/items", customerRoutes);

const orderRoutes = require("./routes/order/order.route");
app.use("/api/orders", orderRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
