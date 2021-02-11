const express = require('express');
const router = express.Router();
const { restaurant } = require('../controllers/index');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/', restaurant.list);
router.get('/:id', restaurant.get);
router.post('/', restaurant.create);
router.put('/:id', restaurant.update);
router.delete('/:id', restaurant.remove);

module.exports = router;
