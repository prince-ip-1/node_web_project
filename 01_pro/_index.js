import http from "http";

const server = http.createServer((req, res) => {
    if(req.url == '/') {
        res.end("This is Home Page");
    } else if (req.url == '/about') {
        res.end("This is About page.");
    } else if (req.url == '/blog') {
        res.end("This is Blog page.");
    } else if (req.url == '/contact') {
        res.end("This is Contact page.");
    } else {
        res.writeHead(404, {"Content-type" : "text/html"});
        res.end("<h1> 404 Error Pages.</h1>");
    }
});
server.listen(8000, "127.0.0.1", () => {
    console.log("Port no 8000");
});
