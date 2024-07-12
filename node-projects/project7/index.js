const http = require('http');
const SERVER_PORT = 3000;
const SERVER_HOSTNAME = "127.0.0.1";

// Creating a server with request handler function
const server = http.createServer((req, res) => {
    console.log('inside the handler');
    const { headers } = req; // Destructure headers from req

    const userAgent = headers['user-agent'];

    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({
        "platform": process.platform,
        "userAgent": userAgent,
        "date": new Date(),
        "message": "Hello user, welcome to the tech world of john"
    }));
});

// Set the server to listen on SERVER_PORT and SERVER_HOSTNAME
server.listen(SERVER_PORT, SERVER_HOSTNAME, () => {
    console.log(`Server running at http://${SERVER_HOSTNAME}:${SERVER_PORT}/`);
});

// Error handling for the server
server.on("error", (error) => {
    console.error("Error occurred:", error.message);
});
