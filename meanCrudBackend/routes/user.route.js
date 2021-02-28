const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controller');

router.get('/', userController.all);
router.post('/user-create', userController.userCreate);
router.get('/:id', userController.userDetails);
router.put('/:id/update', userController.UserUpdate);
router.delete('/:id/delete', userController.UserDelete);

module.exports = router;
