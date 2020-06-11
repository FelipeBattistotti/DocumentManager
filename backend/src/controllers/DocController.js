const connection = require('../database/connection');
const copyPDF = require('../utils/copyPDF');

module.exports = {
    async index(request, response) {
        const { page = 1 } = request.query;
        const user_id = request.headers.authorization;

        const [count] = await connection('doc').where('doc.user_id', user_id).count();

        const doc = await connection('doc')
            .join('user', 'user.id', '=', 'doc.user_id')
            .andWhere('doc.user_id', user_id)
            .limit(5)
            .offset((page - 1) * 5)
            .select([
                'doc.*'
            ]);

        response.header('X-Total-Count', count['count(*)']);

        return response.json(doc);
    },

    async create(request, response) {
        const { name, size, path } = request.body;
        const user_id = request.headers.authorization;
        const content = copyPDF(request.body.path);

        const [id] = await connection('doc').insert({
            name,
            content,
            size,
            path,
            user_id,
        });

        return response.json({ id });
    },

    async delete(request, response) {
        const { id } = request.params;
        const user_id = request.headers.authorization;

        const doc = await connection('doc')
            .where('id', id)
            .select('user_id')
            .first();

        if (doc.user_id != user_id) {
            return response.status(401).json({ error: 'Operation not permitted.' });
        }

        await connection('doc').where('id', id).delete();

        return response.status(204).send();
    }
};
