const db = require("../../models");
const { Op, Sequelize } = require("sequelize");

const getFoodItems = async (req, res) => {
  try {
    const searchItem = req.query?.search ?? "";
    const allowedSearchFields = [
      "id",
      "$customer.name$",
      "$deliveryAgent.id$",
      "$deliveryAgent.name$",
      "$deliveryAgent.surname$",
      "$deliveryAgent.surname$",
      "$payment.paymnetType$",
      // "price",
      // "$items.price$",
    ];
    const searchCondition = [];
    allowedSearchFields.forEach((field) =>
      searchCondition.push({
        [field]: { [Op.like]: "%" + searchItem + "%" },
      })
    );
    const limit = req.query.limit ? parseInt(req.query.limit) : 5;

    const page = req.query.page ? parseInt(req.query.page) : 1;
    const order = req.query.order ? JSON.parse(req.query.order) : { id: "ASC" };
    const offset = (page - 1) * limit;

    const { count, rows } = await db.Order.findAndCountAll({
      distinct: true,
      logging: false,
      subQuery: false,
      attributes: ["id", "userAddress", "createdAt", "updatedAt"],
      where: {
        [Op.or]: searchCondition,
      },
      order: [
        // ["deliveryAgent", "id", "DESC"],
        ["id", "ASC"],
      ],
      include: [
        {
          model: db.User,
          as: "customer",
          attributes: ["id", "name", "surname", "email", "contact"],
        },
        {
          model: db.User,
          as: "deliveryAgent",
          attributes: ["id", "name", "surname", "email", "contact"],
        },
        {
          model: db.FoodItem,
          as: "items",
          attributes: ["id", "name", "price"],
          through: {
            as: "orderItem",
            attributes: ["quantity"],
          },
          include: [
            {
              model: db.FoodCategory,
              as: "category",
              attributes: ["id", "name"],
            },
            {
              model: db.User,
              as: "supplier",
              attributes: ["id", "name", "surname", "email", "contact"],
            },
          ],
        },
        {
          model: db.PaymentInfo,
          as: "payment",
          attributes: ["id", "paymnetType", "amount", "createdAt", "updatedAt"],
        },
      ],
      offset: offset,
      limit: limit,
    });
    res.status(200).json({ count, skip: offset, page, limit, data: rows });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

module.exports = { getFoodItems };
