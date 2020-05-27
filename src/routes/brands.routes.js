const { Router } = require('express');

const BrandsController = require('../controllers/BrandsController');

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
routes.get('/status', BrandsController.statusApi);
routes.get('/installments-limit/:brand', BrandsController.limiteParcelas);
routes.post('/pay/:brand', BrandsController.dadosPagamento);

module.exports = routes;