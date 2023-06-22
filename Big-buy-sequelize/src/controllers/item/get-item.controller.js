const { Op } = require("sequelize");

const {
  getItemService,
  getSellerItemsService,
  getItemsService,
  getItemsCountService,
} = require("../../services/item.service");

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
    const allowedSearchFielsd = ["name", "price", "minPrice", "maxPrice"];

    const order = req.query.order ? JSON.parse(req.query.order) : { id: "ASC" };

    const limit = req.query.limit ? parseInt(req.query.limit) : 10;

    const page = req.query.page ? parseInt(req.query.page) : 1;

    const offset = (page - 1) * limit;

    console.log("searchQuery");
    const searchQuery = req.query.search
      ? JSON.parse(JSON.stringify(req.query.search))
      : null;
    console.log(searchQuery);
    let searchCondition = [];

    const apiOptions = {
      offset: offset,
      limit: limit,
      order: Object.entries(order),
      where: {
        [Op.or]: searchCondition,
      },
    };
    if (searchQuery) {
      for (let condition in searchQuery) {
        console.log("condition", condition);
        if (allowedSearchFielsd.includes(condition)) {
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
