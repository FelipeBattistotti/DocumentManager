const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');

const app = express();

/* // PRODUÇÃO
app.use(cors({
  origin: 'http://meuapp.com'
}));
*/

app.use(cors()); //DEV
app.use(express.json());
app.use(routes);
app.use(errors());

/**
 * Rota / Recurso
 */

/**
 * Métodos HTTP:
 * 
 * GET:    Buscar  uma informação no back-end
 * POST:   Criar   uma informação no back-end
 * PUT:    Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

 /**
  * Tipos de parâmetros
  * 
  * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
  * Route Params: Parâmetros utilizados para identificar recursos
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
  */

/**
 * SQLite
 */

/**
 * Driver: 
 */


//app.listen(3333);

module.exports = app;
