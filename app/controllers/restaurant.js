const { Restaurant: RestaurantEntity } = require('../entities/index');

class Restaurant {
    static async list(req, res, next) {
        try {
            const results = await new RestaurantEntity().list();
            res.send(results);
        } catch (err) {
            next(err);
        }
    }

    static async create(req, res, next) {
        try {
            const restaurantID = await new RestaurantEntity().create(req.body);
            res.send(restaurantID);
        } catch (err) {
            next(err);
        }
    }

    static async get(req, res, next) {
        try {
            const restaurant = await new RestaurantEntity().get(req.params.id);
            res.send(restaurant);
        } catch (err) {
            next(err);
        }
    }

    static async update(req, res, next) {
        try {
            const params = req.body;
            await new RestaurantEntity().update({
                restaurant_id: req.params.id,
                name: params.name,
                cuisine: params.cuisine,
                borough: params.borough
            });
            
            res.send();
        } catch (err) {
            next(err);
        }
    }

    static async remove(req, res, next) {
        try {
            await new RestaurantEntity().remove(req.params.id);
            res.send();
        } catch (err) {
            next(err);
        }
    }
}

module.exports = Restaurant;
