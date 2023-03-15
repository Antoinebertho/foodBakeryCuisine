const express = require('express');
const userRouter = express.Router();
const app = express();
const port = 3000;
const token = require('../controllers/userController')
const { createUser } = require('../controllers/userController')
const { getAllUsers } = require('../controllers/userController')
const { getUser } = require('../controllers/userController')
const { deleteUser } = require('../controllers/userController')
const { editUser } = require('../controllers/userController')
const { loginUser } = require('../controllers/userController')
const { logoutUser } = require('../controllers/userController')

userRouter.post('/create', createUser)
userRouter.get('/users', getAllUsers)
userRouter.get('/users/:id', getUser)
userRouter.delete('/users/:id/delete', deleteUser)
userRouter.put('/users/:id/update', editUser)
userRouter.post('/users/login', loginUser)
userRouter.post('/users/logout', logoutUser)

module.exports = userRouter