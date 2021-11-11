var Gun = require('../models/Gun'); 
 
// List of all Guns 
exports.Gun_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: Gun list'); 
}; 
 
// for a specific Gun. 
exports.Gun_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: Gun detail: ' + req.params.id); 
}; 
 
// Handle Gun create on POST. 
exports.Gun_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: Gun create POST'); 
}; 
 
// Handle Gun delete form on DELETE. 
exports.Gun_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Gun delete DELETE ' + req.params.id); 
}; 
 
// Handle Gun update form on PUT. 
exports.Gun_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Gun update PUT' + req.params.id); 
}; 