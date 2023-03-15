const { deleteCourse } = require('../controllers/courseController')
const { editCourse } = require('../controllers/courseController')
const { getCourse } = require('../controllers/courseController')
const { createCourse } = require('../controllers/courseController')
const { getAll } = require('../controllers/courseController')

const courseRouter = require('express').Router()

courseRouter.post('/courses/create',createCourse)
courseRouter.get('/courses', getAll)
courseRouter.get('/courses/:id', getCourse)
courseRouter.put('/courses/:id/update', editCourse)
courseRouter.delete('/api/user/:id/delete', deleteCourse)

module.exports = courseRouter