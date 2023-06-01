const express = require('express')
const app = express()

const port = 8080;


// Servir contenido estático
app.use( express.static('public'));
// consideracion, debe existir el archivo index.html, si no dara error

// Si agrego una carpeta en la ruta de public, ejemplo /public/hola-mundo/index.html
// tendrá prioridad antes que un app.get('/hola-mundo')

app.get('/about', function (req, res) {
    res.send('work!')
  })

  // Para cualquier ruta no mapeada
  app.get('*', (req, res) => {
    //res.send('404 Page not found!')
    res.sendFile( __dirname + '/public/404.html');
  })

//app.listen(8080)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })