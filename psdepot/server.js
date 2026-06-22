const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 8080;
const DIR = "/data/data/com.termux/files/home/www/psdepot";

const server = http.createServer((req, res) => {
    let filePath = path.join(DIR, req.url === "/" ? "index.html" : req.url);
    
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
    console.log(`PSDEPOT Landing: http://localhost:${PORT}`);
});
