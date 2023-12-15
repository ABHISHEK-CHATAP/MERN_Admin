const { Schema, model } = require("mongoose");
// [mongoose.Schema && mongoose.model ] direct destructure kr raha hai

const contactSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
});

// create a model or collection
const Contact = new model("Contact", contactSchema);

module.exports = Contact;
