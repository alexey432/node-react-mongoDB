const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const { Schema } = mongoose;

const recipientSchema = new Schema({
    // googleId: String,
    email: String,
    responded: { type: Boolean, default: false }
});

module.exports = recipientSchema;