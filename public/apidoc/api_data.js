define({ "api": [
  {
    "type": "get",
    "url": "/installments-limit/:brand",
    "title": "",
    "group": "Bandeira",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "brand",
            "description": "<p>Nome da bandeira do cartão.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Resposta de Sucesso",
          "content": "HTTP/1.1 200 OK\n{\n  \"bandeira\": brand,\n           \"limite_parcelas\": limite_parcelas,\n           \"operadores_permitidos\": {\n               \"op-01\": true,\n               \"op-02\": true,\n               \"op-03\": true,\n           }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "HTTP/1.1 401 Error",
          "content": "HTTP/1.1 401 Error\n{\n   \"resposta\": \"erro\",\n   \"detalhes\": \"A bandeira informada não existe\",\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/brands.routes.js",
    "groupTitle": "Bandeira",
    "name": "GetInstallmentsLimitBrand"
  },
  {
    "type": "get",
    "url": "/pay/:brand",
    "title": "",
    "group": "Bandeira",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "brand",
            "description": "<p>Nome da bandeira do cartão.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Resposta de Sucesso",
          "content": "HTTP/1.1 200 OK\n{\n  \"resposta\": \"sucesso\",\n  \"nome_cliente\": dados.nome_cliente,\n  \"valor_em_centavos\": dados.valor_em_centavos,\n  \"parcelas\": dados.parcelas\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "HTTP/1.1 401 Error",
          "content": "HTTP/1.1 401 Error\n{\n   \"cod_resposta\": \"operadora-negada\",\n    \"resposta\": \"falha\",\n    \"detalhes\": \"Operadora sem relação com a bandeira\",\n    \"cod_operadora\": dados.cod_operadora\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/brands.routes.js",
    "groupTitle": "Bandeira",
    "name": "GetPayBrand"
  },
  {
    "type": "get",
    "url": "/status",
    "title": "",
    "group": "Bandeira",
    "success": {
      "examples": [
        {
          "title": "Resposta de Sucesso",
          "content": "HTTP/1.1 200 OK\n{\n  'status': 'Serviço disponível WS2'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/brands.routes.js",
    "groupTitle": "Bandeira",
    "name": "GetStatus"
  },
  {
    "type": "get",
    "url": "/pay/:operator",
    "title": "",
    "group": "Operador",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "operator",
            "description": "<p>Nome do operador do cartão.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Resposta de Sucesso",
          "content": "HTTP/1.1 200 OK\n{\n   \"resposta\": \"sucesso\",\n    \"nome_cliente\": dados.nome_cliente,\n    \"valor_em_centavos\": dados.valor_em_centavos,\n    \"parcelas\": dados.parcelas\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "HTTP/1.1 401 Error",
          "content": "HTTP/1.1 401 Error\n{\n   \"resposta\": \"falha\",\n   \"detalhes\": \"Operadora não existe\",\n   \"operadora\": operator\n}",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 401 Error",
          "content": "HTTP/1.1 401 Error\n{\n   \"resposta\": \"falha\",\n   \"detalhes\": \"Loja não autorizada\",\n   \"operadora\": operator,\n   \"cod-loja\": dados.cod_loja\n}",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 401 Error",
          "content": "HTTP/1.1 401 Error\n{\n   \"resposta\": \"falha\",\n   \"detalhes\": \"Bandeira não autorizada\",\n   \"operadora\": operator,\n   \"bandeira\": dados.bandeira\n}",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 401 Error",
          "content": "HTTP/1.1 401 Error\n{\n   \"resposta\": \"falha\",\n  \"detalhes\": \"Limite de parcelas ultrapassado\",\n   \"bandeira\": dados.bandeira,\n   \"parcelas_solicitadas\": dados.parcelas,\n   \"limite_parcelas\": limite_parcelas\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/operators.routes.js",
    "groupTitle": "Operador",
    "name": "GetPayOperator"
  },
  {
    "type": "get",
    "url": "/status",
    "title": "",
    "group": "Operador",
    "success": {
      "examples": [
        {
          "title": "Resposta de Sucesso",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"Serviço disponível WS2.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/operators.routes.js",
    "groupTitle": "Operador",
    "name": "GetStatus"
  }
] });
