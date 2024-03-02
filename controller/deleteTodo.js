const todo = require("../models/todo");

const deleteTodo = async (req, res) => {
  try {
    const id = req.params.id;
    await todo.findByIdAndDelete({ _id: id });
    res.status(200).json({
      success: true,
      message: "Deleted successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "something went wrong",
    });
  }
};

module.exports = deleteTodo;
