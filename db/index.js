const { MongoClient } = require('mongodb');
const conf = require('../config')();

class Mongo {
    static async connect() {
        const client = await MongoClient.connect(conf.db.connection, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            w: 'majority',
            wtimeout: 2000
        });

        return client;
    }
}

module.exports = Mongo;