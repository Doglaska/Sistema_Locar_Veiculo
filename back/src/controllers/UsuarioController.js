const usuarioService = require("../services/UsuarioService");

class UsuarioController {

    async create(req, res) {
        const usuario = await usuarioService.create(request.body);

        return response.status(201).json({ usuario });
    }
}

module.exports = new UsuarioController();
