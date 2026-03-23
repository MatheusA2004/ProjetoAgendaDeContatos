import ContatosRepository from "../repositories/ContatosRepository.js";

class ContatosController{

    async index(req, res) {
        try {
            const resultado = await ContatosRepository.findAll();
            res.status(200).json(resultado);
        } catch (erro) {
            res.status(500).json({ erro: "Erro ao buscar dados" });
        }
    }

    async show(req, res) {
        try {
            const id = req.params.id;
            const resultado = await ContatosRepository.findById(id);
            
            if (resultado.length === 0) {
                return res.status(404).json({ mensagem: "contato não encontrado" });
            }
            
            res.status(200).json(resultado[0]);
        } catch (erro) {
            res.status(500).json({ erro: "Erro ao buscar dados" });
        }
    }

    async findByInitial(req, res) {
    try {
        const letra = req.params.letra;

        const resultado = await ContatosRepository.findByInitial(letra);

        if (resultado.length === 0) {
            return res.status(404).json({ mensagem: "Nenhum contato encontrado com essa inicial" });
        }

        res.status(200).json(resultado);
    } catch (erro) {
        res.status(500).json({ erro: "Erro ao buscar contatos pela inicial" });
    }
}

    async store(req, res) {
        try {
            const contato = req.body;
            const resultado = await ContatosRepository.create(contato);
            res.status(201).json(resultado);
        } catch (erro) {
            res.status(500).json({ erro: "Erro ao criar contato" });
        }
    }

    async update(req, res) {
        try {
            const contato = req.body;
            const id = req.params.id;
            await ContatosRepository.update(contato, id);
            res.status(200).json({ mensagem: "Contato atualizado com sucesso!" });
        } catch (erro) {
            res.status(500).json({ erro: "Erro ao atualizar contato" });
        }
    }

    async delete(req, res) {
        try {
            const id = req.params.id;
            const resultado = await ContatosRepository.delete(id);
            res.status(200).json(resultado);
        } catch (erro) {
            res.status(500).json({ erro: "Erro ao deletar contato" });
        }
    }

}    

export default new ContatosController();