const http = require("http");
const getReq = require("./methods/getreq");
const postReq = require("./methods/postreq");
const putReq = require("./methods/putreq");
const deleteReq = require("./methods/deletereq");
let movies = require("./data/movies.json");
require("dotenv").config();

const PORT = process.env.PORT || 5110;

const server = http.createServer((req, res) => {
    req.movies = movies;
    switch (req.method) {
        case 'GET':
            getReq(req, res); // Ensure the case matches
            break;
        case 'POST':
            postReq(req, res); // Ensure the case matches
            break;
        case 'PUT':
            putReq(req, res); // Ensure the case matches
            break;
        case 'DELETE':
            deleteReq(req, res); // Ensure the case matches
            break;
        default:
            res.statusCode = 404;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ message: 'Not Found' }));
    }
});

server.listen(PORT, () => {
    console.log(`server running at ${PORT}`);
});
