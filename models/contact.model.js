//put your schema here
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactSchema = new Schema({
	name: {type: String, required: true, minlength: 3, trim: true},
	email: {type: String, required: true, trim: true},
	subject: {type: String, maxlength: 90, trim: true},
	message: {type: String, required: true, trim: true}
}, {
	timestamps: true 
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;