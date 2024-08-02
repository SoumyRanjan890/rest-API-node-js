const requestBodyparser = require('../util/body-parser');
const writeToFile = require('../util/write_file');
module.exports = async(req,res)=>{
    let baseurl = req.url.substring(0, req.url.lastIndexOf("/") + 1);
    console.log(baseurl);
    let id = req.url.split("/")[3];
    const Regexpv4 = new RegExp('^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$', 'i');
    console.log(id);
    if (!Regexpv4.test(id)) {
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ "error": "uuid problem" }));
    }else if(baseurl=== "/api/movies/" && Regexpv4.test(id)){
        try {
            let body = await requestBodyparser(req);
            const index = req.movies.findIndex((movie) => movie.id === id);
        
            if (index === -1) {
                res.writeHead(404, { "Content-Type": "application/json" });
                res.end(JSON.stringify({ "error": "movie not found" }));
            }else{
                req.movies[index] = {id,...body}
                writeToFile(req.movies); //'movies.json'
                res.writeHead(200, { "Content-Type": "application/json" });
                res.end(JSON.stringify(req.movies[index]));
            }
        } catch (error) {
            res.writeHead(400, { "Content-Type": "application/json" });
            res.end('not valid');
        }
    }
};