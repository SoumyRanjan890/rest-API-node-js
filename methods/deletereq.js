const writeToFile = require("../util/write_file");

module.exports = (req, res) => {
    let baseurl = req.url.substring(0, req.url.lastIndexOf("/") + 1);
    console.log(baseurl);
    let id = req.url.split("/")[3];
    const Regexpv4 = new RegExp('^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$', 'i');
    console.log(id);
    
    if (!Regexpv4.test(id)) {
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ "error": "uuid problem" }));
    } else if (baseurl === "/api/movies/" && Regexpv4.test(id)) {
        const index = req.movies.findIndex((movie) => movie.id === id);
        
        if (index === -1) {
            res.writeHead(404, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ "error": "movie not found" }));
        } else {
            req.movies.splice(index, 1);
            writeToFile(req.movies);
            res.writeHead(204, { "Content-Type": "application/json" });
            res.end();
        }
    }
};
