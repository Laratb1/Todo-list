const express = require('express');

const TaskController = require('./controllers/Task');

const routes = express.Router();

const dotenv =  require('dotenv');

dotenv.config();

routes.post('/new/task', TaskController.store);
// routes.get('/tasks', TaskController.index);
// routes.delete('/delete/task/:_id', TaskController.delete);

module.exports = routes;