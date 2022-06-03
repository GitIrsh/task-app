const mongoose = require('mongoose');

const PersonSchema = mongoose.Schema({
    Name : {
        type : string,
        requied : true
    },
    Age : {
        type : string,
        required : true
    },

});
module.exports = mongoose.model('Persons',PersonSchema);