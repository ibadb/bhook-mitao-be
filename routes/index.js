const express = require('express');
const router = express.Router();
const { restaurant } = require('../controllers/index');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/restaurants', restaurant.list);
router.get('/api/restaurants/:id', restaurant.get);
router.post('/api/restaurants', restaurant.create);
router.put('/api/restaurants/:id', restaurant.update);
router.delete('/api/restaurants/:id', restaurant.remove);

module.exports = router;
