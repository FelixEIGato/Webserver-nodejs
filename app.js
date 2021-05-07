require('dotenv').config()
const express = require('express')
const hbs = require('hbs');


const app = express()
const port = process.env.PORT;

//TODO: require('hbs');
//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Servir contenido estático

app.use( express.static( 'public' ) );

app.get('/',  (req, res) => {
  res.render('home', { 
    nombre: 'Rafael Mendoza',
    titulo: 'Curso de Node'
   });
});

// app.get('/',  (req, res) => {
//   res.send('Hello World')
// })

// app.get('/hola-mundo',  (req, res) => {
//   res.send('Hello World 2')
// })

// app.get('*',  (req, res) => {
//   res.sendFile(__dirname + '/public/404.html');
// })
 
app.get('/generic',  (req, res) => {
  res.render('generic', { 
    nombre: 'Rafael Mendoza',
    titulo: 'Curso de Node'
   });
  });

app.get('/elements',  (req, res) => {
  res.render('elements', { 
    nombre: 'Rafael Mendoza',
    titulo: 'Curso de Node'
   });
  });

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  });