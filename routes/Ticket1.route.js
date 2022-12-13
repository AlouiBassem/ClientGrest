const express= require('express');
const router = express.Router();

const {getTic} =require('../controllers/Ticket1');

//router.get('/',getTic);
router.get('/',getTic)

module.exports = router;










