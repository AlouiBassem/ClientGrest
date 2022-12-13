const express = require('express');
const app = express();
const cors = require('cors');

const categorierouter = require("./routes/categorie.route");
const articlerouter = require("./routes/article.route")
const ticketrouter = require("./routes/Ticket.route")
const ticket1router = require("./routes/Ticket1.route")
const ligneticket1 = require("./routes/Lignetick1.route")

app.use(express.json());
app.use(cors());
//const db = require("./models");
//db.sequelize.sync();
  // api routes
app.use('/api/categorie', categorierouter);
app.use('/api/article', articlerouter);
app.use('/api/article/', articlerouter);
app.use('/api/ticket', ticketrouter);
app.use('/api/ticket1', ticket1router);
app.use('/api/ligneticket1', ligneticket1);
// start server
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 3030;
app.listen(port, () => console.log('Server listening on port ' + port));
