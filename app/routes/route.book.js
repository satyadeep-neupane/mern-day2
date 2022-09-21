const bookController = require('../controllers/bookController');
const route = require('express').Router();


route.get('/', bookController.listBook);
route.post('/', bookController.createBook);
route.delete('/:id', bookController.deleteBook);

module.exports = route;