const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const user = new Schema({
    roll: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: false
    },
}, {
    timestamps: true,
});
const User = mongoose.model('User', user);

module.exports = User;