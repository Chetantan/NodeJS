module.exports = function(app) {

    app.get('/',function(req,res){ // Client's '/' THE BLOCK OF CODE THAT RESPONSES YOUR REQUEST
        res.render('index'); // INDEX VİEW FILE HAS BEEN RENDERED
    });

}