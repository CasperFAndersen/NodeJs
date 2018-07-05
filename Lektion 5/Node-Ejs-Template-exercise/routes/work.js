const express = require("express");
const router = express.Router();

const workController = require('../controllers/workController/work');


router.get('/', workController.get_all)
router.post('/subtract', workController.subtract)

module.exports = router;