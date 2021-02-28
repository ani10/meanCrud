const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controller');

router.get('/test', userController.test);
router.post('/user-create', userController.userCreate);
router.get('/:id', userController.userDetails);

module.exports = router;
