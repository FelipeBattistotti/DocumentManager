const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

//const OngController = require('./controllers/OngController');
//const IncidentController = require('./controllers/IncidentController');
//const ProfileController = require('./controllers/ProfileController');
//const SessionController = require('./controllers/SessionController');

const UserController = require('./controllers/UserController');

const routes = express.Router();


routes.get('/user', UserController.index);

/**
 * Query
 * Route
 * Body
 */
routes.post('/user', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        pwd: Joi.string().required(),
    })
}), UserController.create);

routes.delete('/user/:id', UserController.delete);


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

routes.post('/sessions', SessionController.create);
*/

module.exports = routes;
