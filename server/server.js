var Server = require('http-route-proxy');
Server.proxy([
{
    from: 'localhost:3001',
    to: 'https://github.com',
    route: ['!/', '/api']
}
]);