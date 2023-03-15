const express = require("express");
//const userRouter = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

// Create user
const createUser = async(req,res)=> {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        const newUser = new User({
            name: req.body.name,
            lastName: req.body.lastName,
            email: req.body.email,
            password: hashedPassword,
        });
        const user = await newUser.save();
        res.send(user);
    } catch (error) {
        console.error(error);
    }
}
 
// Get all users
const getAllUsers = async(req, res) => {
    try {
        const users = await User.find();
        res.send(users);
    } catch (error) {
        console.error(error);
    }
}

// Login user
const loginUser = async(req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        !user && res.status(400).send("User not found");
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        !validPassword && res.status(400).send("Invalid password");
        const token = jwt.sign({ _id: user._id }, process.env.ACCESS_TOKEN_SECRET);
        res.header("x-auth-token", token).send(token);
    } catch (error) {
        console.error(error);
    }
}

// Logout user
const logoutUser = async(req, res) => {
    try {
        res.send("User logged out");
    } catch (error) {
        console.error(error);
    }
}

// Get user
const getUser = async(req, res) => {
    try {
        const user = await User.findById(req.params.id);
        !user && res.status(400).send("User not found");
        res.send(user);
    } catch (error) {
        console.error(error);
    }
}

// edit user
const editUser = async(req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        !user && res.status(400).send("User not found");
        res.send(user);
    } catch (error) {
        console.error(error);
    }
}

// delete user
const deleteUser = async(req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        !user && res.status(400).send("User not found");
        res.send(user);
    } catch (error) {
        console.error(error);
    }
}

module.exports = { createUser, getAllUsers, loginUser, logoutUser, getUser, editUser, deleteUser };