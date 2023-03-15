const express = require('express');
const subscriberRouter = express.Router();
const app = express();
const { createSubscriber, getAllSubscribers, editSubscriber, deleteSubscriber, getSubscriber } = require('../controllers/subscriberController')

subscriberRouter.post('/subscribers/create', createSubscriber)
subscriberRouter.get('/subscribers', getAllSubscribers)
subscriberRouter.get('/subscribers/:id', getSubscriber)
subscriberRouter.delete('/subscribers/:id/delete', deleteSubscriber)
subscriberRouter.put('/subscribers/:id/update', editSubscriber)

module.exports = subscriberRouter