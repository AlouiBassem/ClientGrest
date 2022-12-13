const { article } = require('../models');
const db=require('../models')
Article=db.article

const getArticle = async (req, res) => { 
    try {
        const art = await article.findAll()
        
        res.status(200).json(art);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}



const getArtbyCat = async (req, res) => { 
    let codeart = req.params.codeart;
    try {
        const art = await db.sequelize.query(`select * from article where CodeCat ="${codeart}"order by codeart` );
             res.status(200).json(art[0]);
         } catch (error) {
             res.status(404).json({ message: error.message });
         }
}



module.exports = {
    getArticle,
    getArtbyCat,
   
}
