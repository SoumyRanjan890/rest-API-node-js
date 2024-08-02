const crypto = require('crypto');
const requestBodyparser = require('../util/body-parser');
const writeToFile = require('../util/write_file')
module.exports = async (req,res)=>{
    if(req.url === "/api/movies"){
        try{
            let body = await requestBodyparser(req);
            body.id = crypto.randomUUID();
            console.log(body.id);
            req.movies.push(body);
            writeToFile(req.movies);
            res.writeHead(201,{"content-type":"application/json"});
            res.end();
            console.log("request body: ",body)
        }catch(err){
            res.writeHead(404,{"content-type":"application/json"});
            res.end(JSON.stringify({"error":err.message}));
        }
    }else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ "error": "Not found" }));
    }

};