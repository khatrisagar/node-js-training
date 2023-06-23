const db = require("../../models");

const getFoodItems = async (req, res) => {
  try {
    const items = await db.FoodItem.findAll({
      //   where: {
      //     categoryId: 2,
      //   },
      include: [
        {
          model: db.FoodCategory,
          as: "category",
          required: true,
          where: {
            createdAt: "2023-06-23T11:12:34.000Z",
          },
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
