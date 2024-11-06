
const http = require('http');
const PORT = 3000

const server = http.createServer(
    (req, res)=>{
        if(req.url == '/'){
            res.write("Hello World!"); 
            res.end();
        }
        if(req.url == '/api/departments'){
            res.write(JSON.stringify([{id: 1, name:'ECE'},{id: 2, name: 'CSE'}]));
            res.end();
        }
    }
);
server.listen(PORT);

console.log(`Listening on port ${PORT}...`);
