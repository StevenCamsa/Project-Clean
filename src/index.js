const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());


app.listen(port, () => {
    console.log(`Server is running at ${port}.`);
});


app.get('/', (req, res) =>{
    res.send('TEST')
});


app.use("/api", require("../routes/userRoutes.js"))
app.use("/api", require("../routes/rolesRoutes.js"))
app.use("/api", require("../routes/citiesRoutes.js"))
app.use("/api", require("../routes/countryRoutes.js"))
app.use("/api", require("../routes/groupRoutes.js"))
app.use("/api", require("../routes/memberRoutes.js"))
app.use("/api", require("../routes/flightRoutes.js"))
app.use("/api", require("../routes/ticketRoutes.js"))

module.exports = app;

