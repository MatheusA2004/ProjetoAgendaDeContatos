import express from 'express'
import conexao from '../src/app/database/index.js'
import ContatosController from './app/controllers/ContatosController.js'
const app = express()

app.use(express.json())

app.get('/contatos', ContatosController.index)

app.get('/contatos/:id', ContatosController.show)

app.get('/contatos/inicial/:letra', ContatosController.findByInitial);

app.post('/contatos', ContatosController.store)

app.delete('/contatos/:id',ContatosController.delete)

app.put('/contatos/:id', ContatosController.update)

export default app
