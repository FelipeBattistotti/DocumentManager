const connection = require('../database/connection');
//const crypto = require('crypto');
const generateUniqueId = require('../utils/generateUniqueId');

module.exports = {

    async index(request, response) {
        const user = await connection('user').select('*');

        return response.json(user);
    },

    async create(request, response) {
        //const params = request.query;
        //const params = request.params;

        const { name, email, pwd } = request.body;

        //const id = crypto.randomBytes(4).toString('HEX');
        const id = generateUniqueId();

        await connection('user').insert({
            id,
            name,
            email,
            pwd,
        });

        //console.log(data);

        return response.json({ id });
    },

    async delete(request, response) {
        const { id } = request.params;
        //const ong_id = request.headers.authorization;

        /*
        const incident = await connection('user')
            .where('id', id)
            .select('ong_id')
            .first();
        */

        //if (incident.ong_id != ong_id) {
            //return response.status(401).json({ error: 'Operation not permitted.' });
        //}

        await connection('user').where('id', id).delete();

        return response.status(204).send();
    }
};
