const express = require('express')
const app = express()
const axios = require('axios')
const fs = require('fs')
const ejs = require('ejs')
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')


app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static('public'))
app.use('/public', express.static(path.join(__dirname, 'public')));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());




//ROTAS

// calculadora

const calculadora = require('./routes/calculadora')
app.use(calculadora)




app.listen(4000, (erro)=>{
    if(erro){
        console.log('Erro ao conectar servidor')
    }
    else{
        console.log('Conectado com sucesso a porta 4000')
    }
})