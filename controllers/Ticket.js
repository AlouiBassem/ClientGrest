const { eca } = require('../models');
const db=require('../models')
Eca=db.eca


const getTic = async (req, res) => { 
    let numbl = req.params.numbl;
    try {
        const tick = await db.sequelize.query(`select * from eca`);
             res.status(200).json(tick[0]);
         } catch (error) {
             res.status(404).json({ message: error.message });
         }
}



module.exports = {
 
    getTic,
}

