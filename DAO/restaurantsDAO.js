const config = require('../config')();

let db = null;
let restaurants = null;

class RestaurantsDAO {
    static async inject(connection) {
        if (db) {
            return;
        }
        db = await connection.db(config.db.name);
        restaurants = await db.collection('restaurants');
    }

    static insertOne(input) {
        return restaurants.insertOne(input);
    }

    static fetchAll(limit) {
        return restaurants.find({}).sort({ updated_at: -1}).limit(limit).toArray();
    }

    static fetchOne(filter) {
        return restaurants.findOne(filter);
    }

    static updateOne(filter, query) {
        return restaurants.updateOne(filter, query);
    }

    static removeOne(filter) {
        return restaurants.deleteOne(filter);
    }
}

module.exports = RestaurantsDAO;