const express = require("express");
 
const apiServer = express(); // this one errore ()
apiServer.get("/", function(req,res){
    res.send("Hello Worled Express");
});


// 3000 = prot in localhost 
apiServer.listen(3000, ()=> console.log("API server Started "));