const mongoose = require("mongoose");

// this contact schema will have all the values that we want in our contact resource.
const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please add the contact name"],
    },
    email: {
      type: String,
      required: [true, "please add the contact email address"],
    },
    phone: {
      type: String,
      required: [true, "please add the contact phone number"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Contact", contactSchema);
