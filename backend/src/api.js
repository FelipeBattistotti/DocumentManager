const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

//const OngController = require('./controllers/OngController');
//const IncidentController = require('./controllers/IncidentController');
//const ProfileController = require('./controllers/ProfileController');

const UserController = require('./controllers/UserController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

/**
 * GET user
 */
routes.get('/user', UserController.index);

/**
 * POST user
 */
routes.post('/user', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        pwd: Joi.string().required(),
    })
}), UserController.create);

/**
 * DELETE user
 */
routes.delete('/user/:id', UserController.delete);

/**
 * POST sessions
 */
routes.post('/sessions', SessionController.create);


/*
routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    })
}), IncidentController.index);

routes.post('/incidents', IncidentController.create);

routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    })
}), IncidentController.delete);

routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
}), ProfileController.index);

*/

module.exports = routes;
