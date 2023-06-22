const express = require("express");
const app = express();
const PORT = process.env.PORT || 9999;

app.use(express.json());
// middleware
const { authenticate } = require("./middlewares/auth.middleware");

// auth routes
const authRouts = require("./routes/auth/auth.route");
app.use("/api/auth", authRouts);

// item routes
const itemRoutes = require("./routes/item/item.route");
app.use("/api/items", authenticate, itemRoutes);

// purchase routes
const purchaseRoutes = require("./routes/purchase/purchase.route");
app.use("/api/purchase-history", authenticate, purchaseRoutes);

app.listen(PORT, () => {
  console.log(`listening on port:${PORT} `);
});
