const express = require('express');
const server = express();

server.get('/',(req,res)=>{
    res.send("backend start");
})
.listen(8000);