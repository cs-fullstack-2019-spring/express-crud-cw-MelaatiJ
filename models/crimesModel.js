var mongoose = require('mongoose');

var Schema = mongoose.Schema;
//
// "category": {
//     "code": "no-further-action",
//     "name": "Investigation complete; no suspect identified"
// },
// "date": "2019-01",
// "person_id": null,
// "crime": {
//     "category": "violent-crime",
//         "location_type": "Force",
//         "location": {
//         "latitude": "51.506597",
//             "street": {
//             "id": 954966,
//                 "name": "On or near Tawney Road"
//         },
//         "longitude": "0.113599"
//     },
//     "context": "",
//         "persistent_id": "d9c18219e8966eb55934bdad8509d12cff7d420a4818a8c722956445ac663529",
//         "id": 69619567,
//         "location_subtype": "ROAD",
//         "month": "2018-10"

//model//
var CrimeSchema = new Schema(
    {
        category:[{
            code:String,
            name:String,
        }],
        date:Date,
        person_id :Number,
        crime:[{
            category:String,
            location_type:String,
            location:[{
                latitude:Number,
                street:[{
                    id:Number,
                    name:String,
                }],
                longitude:Number,


            }],
            context:String,
            persistent_id:String,
            id:Number,
            location_subtype:String,
            month:Date,

        }],


    });

//Export modelcopy and paste the
module.exports = mongoose.model('Crime', CrimeSchema);
