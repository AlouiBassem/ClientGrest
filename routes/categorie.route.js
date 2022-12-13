const express= require('express');
const {getCategories,getCatbySoc,getCatbySoc1} =require('../controllers/categorie');
const router = express.Router();


router.get('/societes/:codeSoc',getCatbySoc1)
router.get('/societe/:codeSoc',getCatbySoc)
router.get('/',getCategories);
module.exports = router;
