//statr ana keda  b import ll packetg in express 
const express = require("express");
// ana keda  b import ll packetg in Router 
const routers = express.Router();

const ds = require("../datasource/datasource");
//-------- end import packeg-------


routers.get("/", function(req, res){

    const products = ds.fetchProduct();

    res.status(200).json(products);
});
routers.get("/:id",function(req,res){
    const productId = ds.fetchProduct.id;
    const fetchProductId = ds.fetchProductById(productId);

    if(fetchProductId != undefined){
        res.status(200).json(productId);
    }else {
        res.sendStatus(404);
    }
});
module.exports = routers