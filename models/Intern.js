const mongoose = require('mongoose');

// database schema with the required input
const internSchema = new mongoose.Schema({
    name : {type: String, required: true},
    email: {type: String, required: true, unique: true},
    country: {type: String, required: true}
})
const Intern = mongoose.model('Intern', internSchema)

module.exports = Intern;
