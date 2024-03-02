const todo = require("../models/todo");

const getTodos = async (req, res) => {
  try {
    const response = await todo.find({});
    res.status(200).json({
      sucess: true,
      data: response,
      message: "All data fetched",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      sucess: false,
      data: [],
      message: "Something went wrong",
    });
  }
};

module.exports = getTodos;
