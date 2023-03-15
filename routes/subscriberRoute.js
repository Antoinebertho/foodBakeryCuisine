const express = require('express');
const subscriberRouter = express.Router();
const app = express();
const port = 3000;
const { createSubscriber } = require('../controllers/subscriberController')
const { getAllSubscribers } = require('../controllers/subscriberController')
const { getSubscriber } = require('../controllers/subscriberController')
const { deleteSubscriber } = require('../controllers/subscriberController')
const { editSubscriber } = require('../controllers/subscriberController');

subscriberRouter.post('/subscribers/create', createSubscriber)
subscriberRouter.get('/subscribers', getAllSubscribers)
subscriberRouter.get('/subscribers/:id', getSubscriber)
subscriberRouter.delete('/subscribers/:id/delete', deleteSubscriber)
subscriberRouter.put('/subscribers/:id/update', editSubscriber)

module.exports = subscriberRouter