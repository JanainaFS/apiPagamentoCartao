module.exports = {

    async statusApi(req, res) {
        return res.status(200).json({
            "status": "Serviço disponível WS2."
        });
    },
    async limiteParcelas(req, res) {
        const { brand } = req.params;
        let limite_parcelas = 0;

        if (brand === 'mister' || brand === 'vista' || brand === 'daciolo') {
            if (brand === 'mister') limite_parcelas = 12;
            if (brand === 'vista') limite_parcelas = 6;
            if (brand === 'daciolo') limite_parcelas = 4;

            return res.status(200).json({
                "bandeira": brand,
                "limite_parcelas": limite_parcelas,
                "operadores_permitidos": {
                    "op-01": true,
                    "op-02": true,
                    "op-03": true,
                }
            });
        }

        return res.status(401).json({
            "resposta": "erro",
            "detalhes": "A bandeira informada não existe"
        })
    },
    async dadosPagamento(req, res) {
        const dados = req.body;

        if (dados.cod_operadora == "op-01" || dados.cod_operadora == "op-02" || dados.cod_operadora == "op-03") {
            return res.status(200).json({
                "resposta": "sucesso",
                "nome_cliente": dados.nome_cliente,
                "valor_em_centavos": dados.valor_em_centavos,
                "parcelas": dados.parcelas
            });
        }

        return res.status(401).json({
            "cod_resposta": "operadora-negada",
            "resposta": "falha",
            "detalhes": "Operadora sem relação com a bandeira",
            "cod_operadora": dados.cod_operadora
        })
    }
}