const express = require("express");
const app = express();
app.get("/",(req,res) => {
    res.send("basic web services using node js ");
});
app.get("/api/data",(req,res) => {
    res.json({
        service:"Node Web Service",
        status:"Active"
    });
});
app.listen(3000,() => {
    console.log("Server running in port no:3000");
});