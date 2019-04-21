const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
  FullName: {
      type: String,
      default: ''
  },
  Phone: {
      type: String,
  },
  Email: {
      type: String,
  },
  Description: {
      type: String,
  },
 
});

const Contact = mongoose.model("Contact", ContactSchema);
 
module.exports = Contact;