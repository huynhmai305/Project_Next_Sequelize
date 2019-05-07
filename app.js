const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');

const db = require ('./config/database');
//test db
db.authenticate().then(() => console.log('database connect...')).catch(err => console.log('Error: '+ err));

const app= express();
app.engine('handlebars', exphbs({defaultLayout: 'layout'}));
app.set('view engine', 'handlebars')//ejs==handlebars
app.use(express.static(path.join(__dirname, '/static')))
app.get('/',(req,res) => res.send('test'));

//controller
app.use('/admin/user', require('./controllers/user'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`Server start on port ${PORT}`));