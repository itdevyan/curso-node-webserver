const http = require("http");

http.createServer( (req, res) => {
    res.setHeader('Content-Disposition', 'attachment; filename=lista.csv')
    res.writeHead(200, {
        //'Content-Type': 'text/plain'
        'Content-Type': 'application/csv'
    })
    res.write("work!");
    res.end();
}).listen(8080);

console.log("Escuchando en el puerto 8080");