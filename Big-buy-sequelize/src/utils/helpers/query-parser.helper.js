const parseObject = (queryParams) => {
  try {
    return JSON.parse(queryParams);
  } catch (error) {
    return null;
  }
};

module.exports = { parseObject };
