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
      "id",
      "$customer.name$",
      // "$customer.contact$",
      // "$customer.email$",
      // "$deliveryAgent.name$",
      // "$deliveryAgent.contact$",
      // "$deliveryAgent.email$",
      // "$payment.paymnetType$",
      // "$payment.amount$",
    ];

    const searchCondition = [];
    allowedSearchFields.forEach((field) =>
      searchCondition.push({
        [field]: { [Op.like]: searchItem + "%" },
      })
    );

    const limit = req.query.limit ? parseInt(req.query.limit) : 5;

    const page = req.query.page ? parseInt(req.query.page) : 1;
    const order = req.query.order ? JSON.parse(req.query.order) : { id: "ASC" };
    console.log("Orderrrrrrr", order);
    const offset = (page - 1) * limit;

    const { count, rows } = await Order.findAndCountAll({
      distinct: true,
      logging: false,

      attributes: ["id", "userAddress", "createdAt", "updatedAt"],
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
          attributes: ["id", "name", "price"],
          model: FoodItem,
          as: "items",
          through: {
            attributes: ["quantity"],
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
        [Op.or]: [
          ...searchCondition,
          // {
          //   $association: Order.associations.customer,
          //   where: {
          //     name: "ravi",
          //   },
          // },
        ],
      },

      offset: offset,
      limit: limit,
      // order: Object.entries(order),
      // order: [["id", "ASC"]],
      // order: [[{ model: User, as: "customer" }, Sequelize.col("name"), "DESC"]],
      // order: [["customer", "name", "DESC"]],
      // order: [
      //   [{ model: User, as: "customer" }, Sequelize.literal("name DESC")],
      // ],
      // order: [[{ model: User, as: "customer" }, "name", "ASC"]],
    });

    res.status(200).json({ count, skip: offset, page, limit, data: rows });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getOrdersData };
