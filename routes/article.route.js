const express= require('express');
const router = express.Router();

const {getArticle,getArtbyCat} =require('../controllers/article');

router.get('/',getArticle);
router.get('/:codeart',getArtbyCat)


module.exports = router;




