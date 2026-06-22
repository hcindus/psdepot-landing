const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 8081;
const DIR = "/data/data/com.termux/files/home/www/psdepot";

const server = http.createServer((req, res) => {
    let url = req.url === "/" ? "/net30.html" : req.url;
    let filePath = path.join(DIR, url);
    
    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(404);
            res.end("Not Found");
            return;
        }
        res.writeHead(200);
        res.end(data);
    });
});

server.listen(PORT, "0.0.0.0", () => {
    console.log(`PSDEPOT Net 30: http://localhost:${PORT}`);
});
