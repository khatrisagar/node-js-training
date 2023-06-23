const { Op } = require("sequelize");

const {
  getItemService,
  getSellerItemsService,
  getItemsService,
  getItemsCountService,
} = require("../../services/item.service");

const { parseObject } = require("../../utils/helpers/query-parser.helper");

const getItem = async (req, res) => {
  try {
    const item = await getItemService(req.params.id);
    console.log("item", item);
    if (item) {
      res.status(200).json(item);
    } else {
      res.status(404).json({ message: "Item Not Found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getSellerItems = async (req, res) => {
  try {
    const items = await getSellerItemsService(req.user.id);
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getItems = async (req, res) => {
  try {
    const allowedOptionSearchFields = ["name", "price", "minPrice", "maxPrice"];
    const allowedOptionOrderFields = [
      "id",
      "name",
      "price",
      "minPrice",
      "maxPrice",
    ];
    const allowedOptionOrderValues = ["ASC", "DESC"];

    const order =
      parseObject(req.query.order) &&
      allowedOptionOrderFields.includes(
        Object.keys(parseObject(req.query.order))[0]
      ) &&
      allowedOptionOrderValues.includes(
        Object.values(parseObject(req.query.order))[0]
      )
        ? parseObject(req.query.order)
        : { id: "ASC" };
    console.log(
      "order",
      order,
      allowedOptionOrderFields.includes(Object.keys(req.query.order)[0])
    );

    const limit = req.query.limit ? parseInt(req.query.limit) : 10;

    const page = req.query.page ? parseInt(req.query.page) : 1;

    const offset = (page - 1) * limit;

    let searchCondition = [];

    const apiOptions = {
      offset: offset,
      limit: limit,
      order: Object.entries(order),
      where: {
        [Op.or]: searchCondition,
      },
    };
    if (parseObject(req.query.search)) {
      const searchQuery = parseObject(req.query.search);
      for (let condition in searchQuery) {
        if (allowedOptionSearchFields.includes(condition)) {
          searchCondition.push({
            [condition]: {
              [Op.like]: `${searchQuery[condition] + "%"}`,
            },
          });
        }
        // console.log(searchCondition);
      }
    } else {
      apiOptions.where = {};
    }

    const items = await getItemsService(apiOptions);

    const pagination = {
      count: await getItemsCountService(apiOptions),
      page: page,
      limit: limit,
      skip: offset,
    };

    res.status(200).json({ data: items, pagination });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getItem, getSellerItems, getItems };
