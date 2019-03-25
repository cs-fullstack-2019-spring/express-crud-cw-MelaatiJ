// import express//
var express = require("express");
var router = express.Router();
//link to model//
var Crimes = require("../models/crimesModel");

// update category code and name
router.get("/findCategory/:code/:name/:date", (request, response) => {
    Crimes.updateOne({Category:{code:request.params.code, name:request.params.name}},{date:request.params.date}, (errors) =>{
        if(errors){
            response.send(errors)
        }
        else{
            response.send("updated")
        }
    })
});


//export model//
module.exports= router;






// router.get("/findCategory/:code/:name", (request, response) => {
//     Crimes.updateOne({Category:{code:request.params.code, name:request.params.name}
//     }, (errors) => {
//         if(errors){
//             response.send(errors)
//         }
//         else{
//             response.send("updated")
//         }
//     })
// });
//
// //update date //
// router.get("/updateDate/:date", (request, response) => {
//     Crimes.updateOne({date:request.params.date}, (errors) => {
//         if(errors) {
//             response.send(errors)
//         }
//         else{
//             response.send("updated")
//         }
//     })
// });
//
