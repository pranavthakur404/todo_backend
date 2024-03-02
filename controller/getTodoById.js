const todo = require("../models/todo");

const getTodoById = async (req, res) => {
  try {
    const id = req.params.id;
    const todos = await todo.findById({ _id: id });
    if (!todos) {
      return res.status(404).json({
        sucess: false,
        message: "No data found",
      });
    }
    res.status(200).json({
      sucess: true,
      data: todos,
      message: "Sucessfully fetch data",
    });
  } catch (err) {
    console.log(err),
      res.status(500).json({
        sucess: false,
        message: "Something went wrong",
      });
  }
};

module.exports = getTodoById;
