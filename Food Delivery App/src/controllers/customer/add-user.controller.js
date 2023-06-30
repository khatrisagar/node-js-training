const { FoodCategory, FoodItem } = require("../../models");
const { sequelize } = require("../../models");

const addUSer = async (req, res) => {
  //   const addUserTransaction = await sequelize.transaction();
  //   console.log(req.body);
  //   try {
  //     const user = await FoodCategory.create(
  //       {
  //         ...req.body,
  //       },
  //       {
  //         include: FoodItem,
  //       }
  //     );
  //     await addUserTransaction.commit();
  //     res.json(user);
  //   } catch (error) {
  //     await addUserTransaction.rollback();
  //     res.json(error.message);
  //   }
  let addUserTransaction;
  try {
    addUserTransaction = await sequelize.transaction();
    const categories = await FoodCategory.create(
      { ...req.body },
      {
        transaction: addUserTransaction,
        include: { model: FoodItem, as: "items" },
      }
    );

    res.json(categories);
    await addUserTransaction.commit();
  } catch (error) {
    await addUserTransaction.rollback();
    res.json(error.message);
  }
};

// const categories = async (req, res) => {
//   const categories = await FoodCategory.findAll({
//     include: { model: FoodItem, as: "items" },
//   });
//   console.log(categories);
// };

module.exports = { addUSer };
