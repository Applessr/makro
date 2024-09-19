const express = require('express');
const userController = require('../controllers/user-controller');

const router = express.Router()

router.get('/',userController.getMe);
router.post('/favorite',userController.favorite);
router.get('/history',userController.history);

module.exports = router;