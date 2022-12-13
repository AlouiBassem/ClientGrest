const { eca1 } = require('../models');
const db=require('../models')
Eca1=db.eca1


const getTic = async (req, res) => { 
    let numbl = req.params.numbl;
    try {
        const tick = await db.sequelize.query(`select * from eca1`);
             res.status(200).json(tick[0]);
         } catch (error) {
             res.status(404).json({ message: error.message });
         }
}



module.exports = {
 
    getTic,
}

