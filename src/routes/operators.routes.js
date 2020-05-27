const { Router } = require('express');

const OperatorController = require('../controllers/OperatorController');

const routes = Router();

routes.get('/status',OperatorController.statusApi);
routes.post('/pay/:operator',OperatorController.pagCartao);

module.exports = routes;