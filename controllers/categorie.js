const { categorie } = require('../models');
const db=require('../models')
Categorie=db.categorie

const getCategories = async (req, res) => { 
    try {
       const cat = await Categorie.findAll();
       // const cat = await db.sequelize.query(`select * from categorie`);
         
        res.status(200).json(cat);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
const getCatbySoc = async (req, res) => { 
    let codeSoc = req.params.codeSoc;
    try {
     
        const cat = await db.sequelize.query(`select * from categorie where sel=(select sel from societe where Code="${codeSoc}")`);
            
             res.status(200).json(cat[0]);
         } catch (error) {
             res.status(404).json({ message: error.message });
         }
}

const getCatbySoc1 = async (req, res) => { 
    let codeSoc = req.params.codeSoc;
    try {
     
      const cat= await categorie.findAll({
    where:{
    sel :req.params.codeSoc
    }

      })
           
             res.status(200).json(cat);
          //   res.status(200).json(cat[0]);   pour selectionner la premiere enregistrement
         } catch (error) {
             res.status(404).json({ message: error.message });
         }
}

module.exports = {
    getCategories,
    getCatbySoc,
    getCatbySoc1,

}
