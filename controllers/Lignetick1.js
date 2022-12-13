const { lca1 } = require('../models');
const db=require('../models')
Lca1=db.lca1

const getTic = async (req, res) => { 
    let numbl = req.params.numbl;
    try {
        const lca = await db.sequelize.query(`select * from lca1 where NumBl ="${numbl}"`);
             res.status(200).json(lca[0]);
         } catch (error) {
             res.status(404).json({ message: error.message });
         }
}
module.exports = {
 
    getTic,
}

