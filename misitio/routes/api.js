var express = require('express');
var router = express.Router();

router.get('/productos', function(req, res, next) {
    Producto.findAll({  
      attributes: { exclude: ["updatedAt"] }  
    })  
    .then(productos => {  
        res.json(productos)
    })
    .catch(error => res.status(400).send(error)) 
  })