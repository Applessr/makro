const express = require('express');
const productController = require('../controllers/product-controller')

const router = express.Router()


router.get('/all',productController.getAll);
router.get('/category/all',productController.allCategory);
router.get('/category/:categoryId',productController.category);
router.get('/:productId',productController.oneProduct);

module.exports = router;