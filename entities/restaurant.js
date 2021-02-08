const uuid = require('uuid');
const Mongo = require('../db/index');

class Restaurant {
    constructor() {
        this.restaurants = new Mongo('restaurants');
    }
    
    list() {
        return this.restaurants.fetchAll(10);
    }

    async create(restaurant) {
        const restaurantID = uuid.v4();
        const crrTime = new Date().getTime();
        
        await this.restaurants.insertOne({
            restaurant_id: restaurantID,
            name: restaurant.name,
            borough: restaurant.borough,
            cuisine: restaurant.cuisine,
            address: {},
            grades: [],
            created_at: crrTime,
            updated_at: crrTime
        });
        return restaurantID;
    }

    async get(restaurantID) {
        return this.restaurants.fetchOne({ restaurant_id: restaurantID });
    }

    async update(restaurant) {
        const item = await this.restaurants.fetchOne({ restaurant_id: restaurant.restaurant_id });
        if (!item) {
            return false;
        }
        
        const filter = { restaurant_id: restaurant.restaurant_id };
        const query = { $set: { 
            name: restaurant.name || item.name,
            cuisine: restaurant.cuisine || item.cuisine,
            borough: restaurant.borough || item.borough,
            updated_at: new Date().getTime()
        }};

        return this.restaurants.updateOne(filter, query);
    }

    async remove(restaurantID) {
        return this.restaurants.removeOne({ restaurant_id: restaurantID });
    }
}

module.exports = Restaurant;
