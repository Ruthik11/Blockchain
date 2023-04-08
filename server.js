const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join (__dirname,'public')))

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/index.html"));
})

app.get("/home", (req, res) => {
    res.sendFile(path.join(__dirname + "/home.html"));
})

app.get("/contact", (req, res) => {
    res.sendFile(path.join(__dirname + "/contact.html"));
})

// serving the index.html file 

const server = app.listen(5000);
const portNumber = server.address().port;
console.log(`port: ${portNumber}`);
// can see the port number in terminal - you can dictate the port number