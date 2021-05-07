const http = require('http');

http.createServer( (request, response) => {

    // response.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    // response.writeHead(200, { 'Content-Type': 'application/json' });

    // const persona = {
    //     id: 1,
    //     nombre: 'rafael',
    // }

    // response.write( JSON.stringify(persona) );

    // response.write('id; nombre\n');
    // response.write('1; pepe\n');
    // response.write('2; luna\n');
    // response.write('3; felix\n');
    response.write('Hola Mundo');

    response.end();
})
.listen( 8080 );

console.log('Escuchando en', 8080);