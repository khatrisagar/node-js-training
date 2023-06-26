const db = require("../../models");
const { Op, Sequelize } = require("sequelize");

const getFoodItems = async (req, res) => {
  try {
    const searchItem = req.query?.search;
    // const allowedSearchFields = [
    //   "name",
    //   "price",
    //   "$category.name$",
    //   "$supplier.name$",
    //   "$supplier.address$",
    // ];
    // const searchCondition = [];
    // allowedSearchFields.forEach((field) =>
    //   searchCondition.push({
    //     [field]: { [Op.like]: searchItem + "%" },
    //   })
    // );
    // console.log(searchCondition);
    // const items = await db.FoodItem.findAll({
    //   where: {
    //     [Op.or]: searchCondition,
    //   },
    //   include: [
    //     {
    //       model: db.FoodCategory,
    //       as: "category",
    //       required: true,
    //     },
    //     {
    //       model: db.User,
    //       as: "supplier",
    //       required: true,
    //     },
    //   ],
    // });
    const items = await db.Order.findAll({
      include: [
        {
          model: db.FoodItem,
          as: "items",
          // attributes: [
          //   Sequelize.literal("items.OrderItems.quantity"),
          //   "quantity",
          // ],
          through: { attributes: ["quantity"] },
          // nested: false,
        },
      ],
    });
    res.status(200).json(items);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

module.exports = { getFoodItems };
