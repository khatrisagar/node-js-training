const {
  Order,
  User,
  FoodItem,
  PaymentInfo,
  FoodCategory,
} = require("../../models");
const { Op } = require("sequelize");

const getOrdersData = async (req, res) => {
  try {
    const searchItem = req.query?.search ?? "";
    const allowedSearchFields = [
      "userAddress",
      "$items.name$",
      "$items.price$",
      "$customer.name$",
      "$customer.email$",
    ];
    const searchCondition = [];
    allowedSearchFields.forEach((field) =>
      searchCondition.push({
        [field]: { [Op.like]: "%" + searchItem + "%" },
      })
    );

    const limit = req.query.limit ? parseInt(req.query.limit) : 3;

    const page = req.query.page ? parseInt(req.query.page) : 1;

    const offset = (page - 1) * limit;

    const orders = await Order.findAll({
      where: {
        [Op.or]: searchCondition,
      },
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
          // attributes: ["id", "name", "price"],
          model: FoodItem,
          as: "items",
          required: true,
          through: { attributes: ["quantity"], as: "orderItem" },
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
      offset: offset,
      limit: limit,
      order: [["id", "ASC"]],
      subQuery: false,
      distinct: true,
    });

    res.json(orders);
    // res.status(200).json({ count, skip: offset, page, limit, data: rows });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getOrdersData };

// const { count, rows } = await Order.findAndCountAll({
//   where: {
//     [Op.or]: searchCondition,
//   },
//   attributes: ["id", "userAddress", "createdAt", "updatedAt"],
//   include: [
//     {
//       attributes: ["id", "name", "surname", "email", "contact"],
//       model: User,
//       as: "customer",
//       required: true,
//     },
//     {
//       attributes: ["id", "name", "surname", "email", "contact"],
//       model: User,
//       as: "deliveryAgent",
//       required: true,
//     },
//     {
//       // attributes: ["id", "name", "price"],
//       model: FoodItem,
//       as: "items",
//       required: true,
//       through: { attributes: ["quantity"], as: "orderItem" },
//       include: [
//         {
//           attributes: ["id", "name"],
//           model: FoodCategory,
//           as: "category",
//           required: true,
//         },
//         {
//           attributes: ["id", "name", "surname", "email", "contact"],
//           model: User,
//           as: "supplier",
//           required: true,
//         },
//       ],
//     },
//     {
//       model: PaymentInfo,
//       attributes: ["id", "paymnetType", "amount", "createdAt", "updatedAt"],
//       as: "payment",
//       required: true,
//     },
//   ],
//   offset: offset,
//   limit: limit,
//   order: [["id", "ASC"]],
//   distinct: true,
//   subQuery: false,
// });
