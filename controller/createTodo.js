const todo = require("../models/todo");

const createTodo = async (req, res) => {
  try {
    // extract title any description
    console.log(res);
    const { title, description } = req.body;

    //create object and create new todo
    const response = todo.create({ title, description });

    // send a json response with success flag
    res.status(200).json({
      success: true,
      data: response, // res return by db
      message: "Entry created successfully",
    });
  } catch (err) {
    console.error(err);
    {
      success: false;
      message: "Internal server error";
    }
  }
};

module.exports = createTodo;
