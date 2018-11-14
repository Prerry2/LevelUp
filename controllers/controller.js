const express = require("express");

const router = express.Router();

const user = require('../models/model')

// router.get("/", function(req, res) {
//     cat.all(function(data) {
//       var hbsObject = {
//         cats: data
//       };
//       console.log(hbsObject);
//       res.render("index", hbsObject);
//     });
//   });

router.use(express.static('./public'))

  
router.get('/', function(req, res) {
    res.render('./views/index.html')
})






module.exports = router