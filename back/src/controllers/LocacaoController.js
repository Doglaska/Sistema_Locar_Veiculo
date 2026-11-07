const locacaoService = require("../services/LocacaoService");

class UsuarioController {

    async create(req, res) {
        const usuario = await locacaoService.create(request.body);

        return response.status(201).json({ usuario });
    }
}

module.exports = new UsuarioController();
