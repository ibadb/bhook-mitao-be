const uuid = require('uuid');
const { RestaurantsDAO } = require('../DAO');

class Restaurant {
    
    list() {
        return RestaurantsDAO.fetchAll(10);
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

    get(restaurantID) {
        return RestaurantsDAO.fetchOne({ restaurant_id: restaurantID });
    }

    async update(restaurant) {
        const item = await RestaurantsDAO.fetchOne({ restaurant_id: restaurant.restaurant_id });
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

        return RestaurantsDAO.updateOne(filter, query);
    }

    remove(restaurantID) {
        return RestaurantsDAO.removeOne({ restaurant_id: restaurantID });
    }
}

module.exports = Restaurant;
