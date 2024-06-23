const express = require('express');
const { send } = require('../controllers/emailController');

const router = express.Router();

router.post('/send', send);

module.exports = router;