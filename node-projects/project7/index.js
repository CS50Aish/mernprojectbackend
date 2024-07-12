const http = require('http');
const SERVER_PORT = 3000;
const SERVER_HOSTNAME = "127.0.0.1";

// Creating a server
const server = http.createServer();

// Set the server to listen on listening and error events
server.on("listening", () => console.log("Server Listening"));
server.on("error", () => console.log("Error while handling request"));

// Send a JSON response on receiving on http request
server.on("request", (req, res) => {
    const {headers} = req;
    const userAgent = headers['user-agent'];

    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({
        "platform": process.platform,
        "userAgent": userAgent,
        "date": new Date(),
        "message": "Hello user, welcome to the tech world of john"
    }));

});

