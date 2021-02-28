const http = require("http")

const server = http.createServer((req, res) => {
    console.log("request received");
    console.log(req.headers);
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('X-Foo', 'bar');
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(`<html maaa=a>
<head>
<style>
    body div #id{
    width: 120px;
    background-color: #ff0000;
    }
    body div img{
    width: 20px;
    background-color: black;
    }
</style>
</head>
<body>
    <div>
        <img id="id"/>
        <img/>
    </div>
</body>
</html>`)
})

server.listen(8088);

console.log("server is start!")