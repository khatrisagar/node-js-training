const {
  Order,
  User,
  FoodItem,
  PaymentInfo,
  FoodCategory,
} = require("../../models");
const { Op, Sequelize } = require("sequelize");
const db = require("../../models");

const getOrdersData = async (req, res) => {
  try {
    const searchItem = req.query?.search ?? "";
    const allowedSearchFields = [
      "userAddress",
      // `$items.price$`,
      // "$itemName$",
      "$customer.name$",
      "$customer.email$",
    ];

    const searchCondition = [];
    allowedSearchFields.forEach((field) =>
      searchCondition.push({
        [field]: { [Op.like]: searchItem + "%" },
      })
    );

    const limit = req.query.limit ? parseInt(req.query.limit) : 3;

    const page = req.query.page ? parseInt(req.query.page) : 1;

    const offset = (page - 1) * limit;

    const { count, rows } = await Order.findAndCountAll({
      distinct: true,

      raw: true,

      // attributes: [
      //   "id",
      //   "userAddress",
      //   "createdAt",
      //   "updatedAt",
      //   // [Sequelize.col("customer.name"), "itemName"],
      // ],
      include: [
        {
          attributes: ["id", "name", "surname", "email", "contact"],
          model: User,
          as: "customer",
          required: true,
        },
        {
          attributes: ["id", "name", "surname", "email", "contact"],
          model: User,
          as: "deliveryAgent",
          required: true,
        },
        {
          attributes: [
            "id",
            "name",
            "price",
            // [Sequelize.col(".quantity"), "quantity"],
          ],
          model: FoodItem,
          as: "items",
          required: false,
          nest: true,
          through: {
            // attributes: ["quantity"],
            as: "orderItem",
          },
          include: [
            {
              attributes: ["id", "name"],
              model: FoodCategory,
              as: "category",
              required: true,
            },
            {
              attributes: ["id", "name", "surname", "email", "contact"],
              model: User,
              as: "supplier",
              required: true,
            },
          ],
        },
        {
          model: PaymentInfo,
          attributes: ["id", "paymnetType", "amount", "createdAt", "updatedAt"],
          as: "payment",
          required: true,
        },
      ],
      where: {
        [Op.or]: searchCondition,
      },
      // where: {
      //   [Op.or]: [
      //     {
      //       $association: Order.associations.items,
      //       where: {
      //         price: 600,
      //       },
      //     },
      //   ],
      // },
      offset: offset,
      limit: limit,
      order: [["id", "ASC"]],
    });
    console.log("aaaaaaaaaaaaaaaaa");
    res.status(200).json({ count, skip: offset, page, limit, data: rows });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getOrdersData };
