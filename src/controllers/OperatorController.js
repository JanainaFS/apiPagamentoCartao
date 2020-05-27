module.exports = {
    async statusApi(req, res) {
        return res.status(200).json({
            'status': 'Serviço disponível WS2'
        });
    },
    async pagCartao(req, res) {
        const {operator} = req.params;
        const dados = req.body;

        if (!(operator == "op-01" || operator == "op-02" || operator == "op-03")) {
            return res.status(401).json({
                "resposta": "falha",
                "detalhes": "Operadora não existe",
                "operadora": operator
            })
        }

        if (!(dados.cod_loja == "loja-01" || dados.cod_loja == "loja-02" || dados.cod_loja == "loja-03")) {
            return res.status(401).json({
                "resposta": "falha",
                "detalhes": "Loja não autorizada",
                "operadora": operator,
                "cod-loja": dados.cod_loja
            })
        }

        if (!(dados.bandeira == "mister" || dados.bandeira == "vista" || dados.bandeira == "daciolo")) {
            return res.status(401).json({
                "resposta": "falha",
                "detalhes": "Bandeira não autorizada",
                "operadora": operator,
                "bandeira": dados.bandeira
            })
        }

        if (dados.bandeira == 'mister') {
            let limite_parcelas = 12;
            if (dados.parcelas > limite_parcelas) {
                return res.status(401).json({
                    "resposta": "falha",
                    "detalhes": "Limite de parcelas ultrapassado",
                    "bandeira": dados.bandeira,
                    "parcelas_solicitadas": dados.parcelas,
                    "limite_parcelas": limite_parcelas
                })
            }
        } else if (dados.bandeira == 'vista') {
            let limite_parcelas = 6;
            if (dados.parcelas > limite_parcelas) {
                return res.status(401).json({
                    "resposta": "falha",
                    "detalhes": "Limite de parcelas ultrapassado",
                    "bandeira": dados.bandeira,
                    "parcelas_solicitadas": dados.parcelas,
                    "limite_parcelas": limite_parcelas
                })
            }
        } else if (dados.bandeira == 'daciolo') {
            let limite_parcelas = 4;
            if (dados.parcelas > limite_parcelas) {
                return res.status(401).json({
                    "resposta": "falha",
                    "detalhes": "Limite de parcelas ultrapassado",
                    "bandeira": dados.bandeira,
                    "parcelas_solicitadas": dados.parcelas,
                    "limite_parcelas": limite_parcelas
                })
            }
        }

        return res.status(200).json({
            "resposta": "sucesso",
            "nome_cliente": dados.nome_cliente,
            "valor_em_centavos": dados.valor_em_centavos,
            "parcelas": dados.parcelas
        })

    }
}