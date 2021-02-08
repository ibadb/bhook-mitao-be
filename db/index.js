const { MongoClient } = require('mongodb');
const conf = require('../config')();

class Mongo {
    constructor(collection) {
        this.collection = collection;
    }
    
    async connect() {
        this.connection = await new MongoClient(conf.db.connection, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        }).connect();

        const collection = this.connection.db(conf.db.name).collection(this.collection);

        // const list = await client.db().admin().listDatabases();
        // console.log(list);
        console.log('db connection established...');
        // return db.collection(this.collection);
        return collection;
    }

    disconnect() {
        console.log('closing connection...');
        return this.connection.close();
    }

    async insertOne(input) {
        const collection = await this.connect();
        const result = await collection.insertOne(input);
        await this.disconnect();

        return result;
    }

    async fetchAll(limit) {
        const collection = await this.connect();
        const result = await collection.find({}).sort({ updated_at: -1}).limit(limit).toArray();
        await this.disconnect();

        return result;
    }

    async fetchOne(filter) {
        const collection = await this.connect();
        const result = await collection.findOne(filter);
        await this.disconnect();

        return result;
    }

    async updateOne(filter, query) {
        const collection = await this.connect();
        const result = collection.updateOne(filter, query, async (err, result) => {
            await this.disconnect();
            if (err) {
                return Promise.reject(`Could not update record. ${err}`);
            }
            return result;
        });

        return result;
    }

    async removeOne(filter) {
        const collection = await this.connect();
        const result = await collection.deleteOne(filter);
        await this.disconnect();

        return result;
    }
}

module.exports = Mongo;