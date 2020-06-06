const { Router } = require('express');

const OperatorController = require('../controllers/OperatorController');

const routes = Router();

/**
* @api {get} /status
* @apiGroup Operador
* 
* @apiSuccessExample {json} Resposta de Sucesso
*    HTTP/1.1 200 OK
*    {
*      "status": "Serviço disponível WS2."
*    }
*
*/
routes.get('/status',OperatorController.statusApi);

/**
* @api {get} /pay/:operator
* @apiGroup Operador
*
* @apiParam {String} operator Nome do operador do cartão.
* 
* @apiSuccessExample {json} Resposta de Sucesso
*    HTTP/1.1 200 OK
*    {
*       "resposta": "sucesso",
*        "nome_cliente": dados.nome_cliente,
*        "valor_em_centavos": dados.valor_em_centavos,
*        "parcelas": dados.parcelas
*    }
*
* @apiErrorExample
* HTTP/1.1 401 Error
* {
*    "resposta": "falha",
*    "detalhes": "Operadora não existe",
*    "operadora": operator
* }
*
* @apiErrorExample
* HTTP/1.1 401 Error
* {
*    "resposta": "falha",
*    "detalhes": "Loja não autorizada",
*    "operadora": operator,
*    "cod-loja": dados.cod_loja
* }
*
* @apiErrorExample
* HTTP/1.1 401 Error
* {
*    "resposta": "falha",
*    "detalhes": "Bandeira não autorizada",
*    "operadora": operator,
*    "bandeira": dados.bandeira
* }
*
* @apiErrorExample
* HTTP/1.1 401 Error
* {
*    "resposta": "falha",
*   "detalhes": "Limite de parcelas ultrapassado",
*    "bandeira": dados.bandeira,
*    "parcelas_solicitadas": dados.parcelas,
*    "limite_parcelas": limite_parcelas
* }
*
*/
routes.post('/pay/:operator',OperatorController.pagCartao);

module.exports = routes;