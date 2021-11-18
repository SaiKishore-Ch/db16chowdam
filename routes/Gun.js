var express = require('express'); 
const Gun_controlers= require('../controllers/Gun'); 
var router = express.Router(); 
 
/* GET Gun */ 
router.get('/', Gun_controlers.Gun_view_all_Page ); 

/* GET detail Gun page */
router.get('/detail', Gun_controlers.Gun_view_one_Page);

module.exports = router; 

