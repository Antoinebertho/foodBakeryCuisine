const express = require("express");
// const subscribeRouter = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Subscriber = require("../models/subscriberModel");

// Create subscriber
const createSubscriber =  async(req,res)=> {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        const newSubscriber = new User({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
        });
        const subscriber = await newSubscriber.save();
        res.send(subscriber);
    } catch (error) {
        console.error(error);
    }
}

// Get subscriber
const getSubscriber = async(req, res) => {
    try {
        const subscriber = await User.findById(req.params.id);
        res.send(subscriber);
    } catch (error) {
        console.error(error);
    }
}

// Get all subscribers
const getAllSubscribers = async(req, res) => {
    try {
        const subscribers = await User.find();
        res.send(subscribers);
    } catch (error) {
        console.error(error);
    }
}

// Edit subscriber
const editSubscriber = async(req, res) => {
    try {
        const subscriber = await User.findById(req.params.id);
        subscriber.name = req.body.name;
        subscriber.email = req.body.email;
        subscriber.password = req.body.password;
        subscriber.zipCode = req.body.zipCode;
        const updatedSubscriber = await subscriber.save();
        res.send(updatedSubscriber);
    } catch (error) {
        console.error(error);
    }
}

// Delete subscriber
const deleteSubscriber = async(req, res) => {
    try {
        const subscriber = await User.findById(req.params.id);
        await subscriber.remove();
        res.send("Subscriber deleted");
    } catch (error) {
        console.error(error);
    }
}

module.exports = { createSubscriber, getAllSubscribers, editSubscriber, deleteSubscriber, getSubscriber };