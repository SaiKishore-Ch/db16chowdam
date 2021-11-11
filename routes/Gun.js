var express = require('express'); 
const Gun_controlers= require('../controllers/Gun'); 
var router = express.Router(); 
 
/* GET costumes */ 
router.get('/', Gun_controlers.Gun_view_all_Page ); 
module.exports = router; 