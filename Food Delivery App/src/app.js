const express = require("express");
const app = express();
const PORT = 9999;

const customerRoutes = require("./routes/customer/customer.route.js");
app.use("/api/items", customerRoutes);

const orderRoutes = require("./routes/order/order.route");
app.use("/api/orders", orderRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
