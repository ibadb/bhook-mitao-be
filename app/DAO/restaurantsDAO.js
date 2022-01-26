const config = require('../config');

let restaurants = null;

class RestaurantsDAO {
    static async inject(connection) {
        restaurants = await connection.db().collection('restaurants');
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