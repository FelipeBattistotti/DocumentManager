const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

const UserController = require('./controllers/UserController');
const SessionController = require('./controllers/SessionController');
const DocController = require('./controllers/DocController');

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
routes.post('/session', SessionController.create);

/**
 * GET doc
 */
routes.get('/doc', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    })
}), DocController.index);

/**
 * POST doc
 */
routes.post('/doc', DocController.create);

/**
 * DELETE doc
 */
routes.delete('/doc/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    })
}), DocController.delete);

module.exports = routes;
