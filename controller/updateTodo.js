const todo = require("../models/todo");

const udpateTodo = async (req, res) => {
  try {
    const id = req.params.id;
    const { title, description } = req.body;
    const response = await todo.findByIdAndUpdate(
      { _id: id },
      { title, description, updatedAt: Date.now() }
    );
    res.status(200).json({
      success: true,
      data: response,
      message: "Update Sucessfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

module.exports = udpateTodo;
