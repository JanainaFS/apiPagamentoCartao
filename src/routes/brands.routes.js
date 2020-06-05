const { Router } = require('express');

const BrandsController = require('../controllers/BrandsController');

const routes = Router();

/**
* @api {get} /status
* @apiGroup Bandeira
* 
* @apiSuccessExample {json} Resposta de Sucesso
*    HTTP/1.1 200 OK
*    {
*      'status': 'Serviço disponível WS2'
*    }
*
*/
routes.get('/status', BrandsController.statusApi);

/**
* @api {get} /installments-limit/:brand
* @apiGroup Bandeira
*
* @apiParams {brand} {String} Nome da bandeira do cartão.
* 
* @apiSuccessExample {json} Resposta de Sucesso
*    HTTP/1.1 200 OK
*    {
*      "bandeira": brand,
*               "limite_parcelas": limite_parcelas,
*               "operadores_permitidos": {
*                   "op-01": true,
*                   "op-02": true,
*                   "op-03": true,
*               }
*    }
*
* @apiErrorExample
* HTTP/1.1 401 Error
* {
*    "resposta": "erro",
*    "detalhes": "A bandeira informada não existe",
* }
*
*/
routes.get('/installments-limit/:brand', BrandsController.limiteParcelas);

/**
* @api {get} /pay/:brand
* @apiGroup Bandeira
*
* @apiParams {brand} {String} Nome da bandeira do cartão.
* 
* @apiSuccessExample {json} Resposta de Sucesso
*    HTTP/1.1 200 OK
*    {
*      "resposta": "sucesso",
*            "nome_cliente": dados.nome_cliente,
*            "valor_em_centavos": dados.valor_em_centavos,
*            "parcelas": dados.parcelas
*    }
*
* @apiErrorExample
* HTTP/1.1 401 Error
* {
*    "cod_resposta": "operadora-negada",
*     "resposta": "falha",
*     "detalhes": "Operadora sem relação com a bandeira",
*     "cod_operadora": dados.cod_operadora
* }
*
*/
routes.post('/pay/:brand', BrandsController.dadosPagamento);

module.exports = routes;