const server = require('http').createServer((request, response) => {
    response.writeHead(204, {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',

    })
    response.end('hey there!!')
})

const socketIo = require('socket.io')
const io = socketIo(server, {
    cors: {
        origin: '*',
        credentials: false
    }
})
