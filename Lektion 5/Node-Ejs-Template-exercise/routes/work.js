const express = require("express");
const router = express.Router();

const workController = require('../controllers/workController/work');


router.get('/', clientController.get_all)
router.post('/subtract', workController.subtract)

module.exports = router;