const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();
dotenv.config();

app.use(
    express.urlencoded({
        extended: true,
    }),
);

app.use(express.json());

const personRoutes = require('./routes/personRoutes');

app.use('/person', personRoutes);

app.get('/', (req, res) => {
    res.json({message: 'Olá express!'});
});

mongoose.connect(process.env.MONGO)
    .then (() => {
        console.log("Conectado ao banco de dados mongoDB");
    })
    .catch((err) => console.log(err))
      

app.listen(3000);