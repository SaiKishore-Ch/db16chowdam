var Gun = require('../models/Gun'); 
 
// List of all Guns 
exports.Gun_list = async function(req, res) { 
    try{ 
        theGun = await Gun.find(); 
        res.send(theGun); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// for a specific Gun. 
exports.Gun_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: Gun detail: ' + req.params.id); 
}; 
 
// Handle Gun create on POST. 
exports.Gun_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new Gun(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"Gun_type":"goat", "cost":12, "size":"large"} 
    document.name = req.body.name; 
    document.color = req.body.color; 
    document.weight = req.body.weight; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
 
// Handle Gun delete form on DELETE. 
exports.Gun_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Gun delete DELETE ' + req.params.id); 
}; 
 
// Handle Gun update form on PUT.
exports.Gun_update_put = function(req, res) {
    res.send('NOT IMPLEMENTED: Gun update PUT' + req.params.id);
   };
// VIEWS
// Handle a show all view
exports.Gun_view_all_Page = async function(req, res) {
    try{
    theGun = await Gun.find();
    res.render('Gun', { title: 'Gun Search Results', results: theGun });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };