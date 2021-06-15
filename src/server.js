const  express = require('express');
const mongoose = require('mongoose');
const routes = require ('./routes');

const app = express();

mongoose.connect('mongodb+srv://Didearte:4u6u5t018!@cluster0.srnqz.mongodb.net/Didearte?retryWrites=true&w=majority', {useUnifiedTopology:true, useNewUrlParser:true})



//get, post, put , delete

//req.query = Acessar query params
//req.body = Acessar corpo da requisição (para criação e edição)
app.use (express.json)
app.use(routes);

app.listen(3333);
