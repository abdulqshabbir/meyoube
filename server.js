const express = require("express");
const app = express();

app.use(express.static('public'));

app.listen(3000,function(){
    console.log("you are connected to port 3000");
    //test
})