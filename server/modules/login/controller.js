const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("./Schema"); // Adjust the path as necessary

const JWT_SECRET = "your_jwt_secret_key"; // Replace with your actual secret key

// Function to generate JWT token
const generateToken = (user) => {
  return jwt.sign({ id: user._id, username: user.username }, JWT_SECRET, {
    expiresIn: "1h",
  });
};

// Controller function for user registration
const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send({
        status: 400,
        message: "User already exists",
      });
    }

    // Create a new user
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    res.status(201).send({
      status: 201,
      message: "User registered successfully",
      data: { username: newUser.username, email: newUser.email },
    });
  } catch (e) {
    res.status(400).send({
      status: 400,
      message: "Registration failed",
      error: e.message,
    });
  }
};

// Controller function for user login
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).send({
        status: 404,
        message: "User not found",
      });
    }

    // Verify password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).send({
        status: 401,
        message: "Invalid credentials",
      });
    }

    // Generate a JWT token
    const token = generateToken(user);

    res.send({
      status: 200,
      message: "Login successful",
      data: { token, user: { username: user.username, email: user.email } },
    });
  } catch (e) {
    res.status(400).send({
      status: 400,
      message: "Login failed",
      error: e.message,
    });
  }
};

// Existing controller functions
const getAll = async (req, res) => {
  const data = await schema.find({});
  res.send({
    status: 200,
    message: "Data retrieved",
    data: data,
  });
};

const getAccountByUserId = async (req, res) => {
  const data = await schema
    .find({ user: req.params.id })
    .populate("user", "username");
  res.send({
    status: 200,
    message: "Data retrieved",
    data: data,
  });
};

const getById = async (req, res) => {
  const data = await schema.findById(req.params.id);
  if (data) {
    res.send({
      status: 200,
      message: "Data retrieved",
      data: data,
    });
  } else {
    res.send({
      status: 404,
      message: "Data could not be found",
      data: data,
    });
  }
};

const create = async (req, res) => {
  try {
    const data = await schema.create({ ...req.body });
    res.send({
      status: 201,
      message: "Data created",
      data: data,
    });
  } catch (e) {
    res.status(400).send({
      status: 400,
      message: "Action could not be completed",
      error: e.message,
    });
  }
};

const update = async (req, res) => {
  try {
    await schema.findByIdAndUpdate(req.params.id, { ...req.body });
    res.send({
      status: 200,
      message: "Data updated",
    });
  } catch (e) {
    res.status(400).send({
      status: 400,
      message: "Action could not be completed",
      error: e.message,
    });
  }
};

const remove = async (req, res) => {
  try {
    await schema.findByIdAndDelete(req.params.id);
    res.send({
      status: 200,
      message: "Data deleted",
    });
  } catch (e) {
    res.status(400).send({
      status: 400,
      message: "Action could not be completed",
      error: e.message,
    });
  }
};

module.exports = {
  register,
  login,
  getAll,
  create,
  update,
  remove,
  getById,
  getAccountByUserId,
};
