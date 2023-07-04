const {
  Order,
  User,
  FoodItem,
  PaymentInfo,
  FoodCategory,
} = require("../../models");
const { Op, Sequelize } = require("sequelize");
const db = require("../../models");

const JsonParser = (string) => {
  try {
    return JSON.parse(string);
  } catch (error) {
    return null;
  }
};

const sortOrders = (query, allowField, modelName) => {
  if (JsonParser(query)) {
    const sort = Object.entries(JsonParser(query))[0];
    console.log(
      "sssssss",
      allowField,
      allowField.includes(sort[0]),
      ["ASC", "DESC", "asc", "desc"].includes(sort[1])
    );
    if (
      allowField.includes(sort[0]) &&
      ["ASC", "DESC", "asc", "desc"].includes(sort[1])
    ) {
      console.log("sddd");
      return [[...sort[0].split("."), sort[1]]];
    }
  }
  return [];
};

const getOrdersData = async (req, res) => {
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
    const allowSortFields = [
      "id",
      "createdAt",
      "customer.name",
      "customer.surname",
      "customer.email",
      "deliveryAgent.name",
      "deliveryAgent.surname",
      "deliveryAgent.email",
      "payment.paymnetType",
      "payment.amount",
    ];
    const searchCondition = [];
    allowedSearchFields.forEach((field) =>
      searchCondition.push({
        [field]: { [Op.like]: "%" + searchItem + "%" },
      })
    );
    const limit = req.query.limit ? parseInt(req.query.limit) : 5;

    const page = req.query.page ? parseInt(req.query.page) : 1;
    const order = sortOrders(req.query.order, allowSortFields);
    const offset = (page - 1) * limit;

    const { count, rows } = await db.Order.findAndCountAll({
      distinct: true,
      logging: false,
      subQuery: false,
      attributes: ["id", "userAddress", "createdAt", "updatedAt"],
      where: {
        [Op.or]: searchCondition,
      },
      order: order,
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
        // {
        //   model: db.FoodItem,
        //   as: "items",
        //   // separate: true,
        //   attributes: ["id", "name", "price"],
        //   through: {
        //     as: "orderItem",
        //     attributes: ["quantity"],
        //   },
        //   include: [
        //     {
        //       model: db.FoodCategory,
        //       as: "category",
        //       attributes: ["id", "name"],
        //     },
        //     {
        //       model: db.User,
        //       as: "supplier",
        //       attributes: ["id", "name", "surname", "email", "contact"],
        //     },
        //   ],
        // },
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

module.exports = { getOrdersData };
