const Course = require("../models/courseModel")
const express = require("express");
const courseRouter = express.Router();

// Create course
const createCourse = async(req,res)=>{
    try {
        const newCourse = await Course.create(req.body)
        res.send(newCourse)
    } catch (error) {
        console.error(error)
    }
}

// Get all courses
const getAll = async(req,res)=>{
    try {
        const courses = await Course.find()
        res.send(courses)
    } catch (error) {
        console.error(error)
    }
}

// Get course
const getCourse = async(req,res)=>{
    try {
        const course = await Course.findById(req.params.id)
        res.send(course)
    } catch (error) {
        console.error(error)
    }
}

// Edit course
const editCourse = async(req,res)=>{
    try {
        const course = await Course.findByIdAndUpdate(req.params.id,req.body)
        res.send(course)
    } catch (error) {
        console.error(error)
    }
}

// Delete course
const deleteCourse = async(req,res)=>{
    try {
        const course = await Course.findByIdAndDelete(req.params.id)
        res.send(course)
    } catch (error) {
        console.error(error)
    }
}

module.exports = {createCourse, getAll, getCourse, editCourse, deleteCourse}