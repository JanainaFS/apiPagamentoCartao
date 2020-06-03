const { Router } = require('express');

const OperatorController = require('../controllers/OperatorController');

const routes = Router();

/**
* @api {get} /status Singin
* @apiGroup Sistema
*
* @apiSuccess {String} status Mensagem de acesso autorizado
* 
* @apiSuccessExample {json} Sucesso
*    HTTP/1.1 200 OK
*    {
*      "status": "Serviço está disponível!"
*    }
*
*/
routes.get('/status',OperatorController.statusApi);
routes.post('/pay/:operator',OperatorController.pagCartao);

module.exports = routes;