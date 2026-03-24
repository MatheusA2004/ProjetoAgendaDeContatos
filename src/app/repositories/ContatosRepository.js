import conexao from "../database/index.js";

class ContatosRepository {
    
    executaQuery(sql, valores = '', mensagemErro = '') {
        return new Promise((resolve, reject) => {
            conexao.query(sql, valores, (erro, resultado) => {
                if (erro) {
                    console.log(mensagemErro, erro);
                    return reject(erro);
                }
                return resolve(resultado);
            });
        });
    }

    findAll() {
        const sql = "SELECT * FROM dbagendacontatos.bdcontatos;";
        return this.executaQuery(sql, '', 'Erro ao listar todos os contatos');
    }

    findById(id) {
        const sql = "SELECT * FROM dbagendacontatos.bdcontatos WHERE id=?;";
        return this.executaQuery(sql, id, 'Erro ao buscar contato por id');
    }

    findByInitial(letra) {
        const sql = "SELECT * FROM dbagendacontatos.bdcontatos WHERE nome LIKE ?;";
        const valor = `${letra}%`;

        return this.executaQuery(sql, valor, 'Erro ao buscar contatos pela inicial');
    }

    create(contato) {
        const sql = "INSERT INTO dbagendacontatos.bdcontatos SET ?;";
        return this.executaQuery(sql, contato, 'Erro ao criar contato');
    }

    update(contato, id) {
        const sql = "UPDATE dbagendacontatos.bdcontatos SET ? WHERE id = ?;";
        return this.executaQuery(sql, [contato, id], 'Erro ao atualizar contato');
    }

    delete(id) {
        const sql = "DELETE FROM dbagendacontatos.bdcontatos WHERE id=?;";
        return this.executaQuery(sql, id, 'Erro ao deletar contato');
    }
}

export default new ContatosRepository();