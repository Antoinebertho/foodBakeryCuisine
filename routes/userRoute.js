const express = require('express');
const userRouter = express.Router();
const { createUser , getAllUsers, getUser, deleteUser, editUser, loginUser, logoutUser} = require('../controllers/userController')

userRouter.post('/create', createUser)
userRouter.get('/users', getAllUsers)
userRouter.get('/users/:id', getUser)
userRouter.delete('/users/:id/delete', deleteUser)
userRouter.put('/users/:id/update', editUser)
userRouter.post('/users/login', loginUser)
userRouter.post('/users/logout', logoutUser)

module.exports = userRouter