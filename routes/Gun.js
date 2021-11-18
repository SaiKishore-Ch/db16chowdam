var express = require('express'); 
const Gun_controlers= require('../controllers/Gun'); 
var router = express.Router(); 
 
/* GET Gun */ 
router.get('/', Gun_controlers.Gun_view_all_Page ); 

/* GET detail Gun page */
router.get('/detail', Gun_controlers.Gun_view_one_Page);

/* GET create Gun page */
router.get('/create', Gun_controlers.Gun_create_Page);

/* GET create update page */
router.get('/update', Gun_controlers.Gun_update_Page);

/* GET create Gun page */
router.get('/delete', Gun_controlers.Gun_delete_Page);

module.exports = router; 

