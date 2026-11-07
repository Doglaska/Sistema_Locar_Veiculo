const veiculoService = require("../services/VeiculoService");

class UsuarioController {

    async create(req, res) {
        const usuario = await veiculoService.create(request.body);

        return response.status(201).json({ usuario });
    }
}

module.exports = new UsuarioController();