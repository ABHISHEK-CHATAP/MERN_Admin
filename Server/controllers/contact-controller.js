const Contact = require("../models/contact-model");

const contactForm = async (req, res) => {
  try {
    const { username, email, message } = req.body;
    await Contact.create({ username, email, message });
    res.status(201).json({ msg: "Contact data stored successfully" });
  } catch (error) {
    res.status(500).json({ message: "message not delivered" });
  }
};

module.exports = { contactForm };





















