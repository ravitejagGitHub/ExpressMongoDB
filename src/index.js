const express = require("express");
const path = require("path");
const usersRoute = require("./routes/users");
const bodtPraser = require("body-parser");


const server = express();
server.use(bodtPraser.json());
server.use((req, res, next) => {
    console.log(`Date: ${new Date().toDateString()} - url : ${req.originalUrl}`)
    next();
})
server.use(usersRoute);
server.use(express.static("public"));

//Handle 404 - Resource Not Found.
server.use((req, res, next) => {
    res.status(400).send("Resource Not Found.")
})
//Handle 404 - Resource Not Found.
server.use((error, req, res, next) => {
    console.error(error.stack);
    res.sendFile(path.join(__dirname, "../public/500.html"));
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, (req, res) => {
    console.log(`Server listening at POSR ${PORT}`);
})
