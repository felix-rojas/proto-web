const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const rutas_natgas = require('./routes/natgas.routes');
app.set('view engine', 'ejs');
app.set('views', 'views');
