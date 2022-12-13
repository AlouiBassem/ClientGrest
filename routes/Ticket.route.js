const express= require('express');
const router = express.Router();

const {getTic} =require('../controllers/Ticket');

router.get('/',getTic);

module.exports = router;










