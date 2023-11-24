const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + "/public"));

app.listen(3030, () => {
    console.log(`Server is running on port ${3030}`);
});

app.get("/", (req, res) =>{
    res.sendFile(path.join(__dirname, "./views/index.html"));
});

app.get("/register", (req, res) =>{
    res.sendFile(path.resolve(__dirname, "./views/register.html"))
});

app.get("/login", (req, res) =>{
    res.sendFile(path.resolve(__dirname, "./views/login.html"))
})