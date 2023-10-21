const express = require("express");
const router = express.Router();
const secretController = require('../../controllers/secret/secretController');

router.post('/updateSecret', secretController.updateSecret);
router.post('/validateSecret', secretController.validateSecret);

module.exports = router;