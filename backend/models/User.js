const mongoose = require('mongoose'); 
const { Schema } = mongoose;

const UserSchema = new Schema({
    name: {
        type: 'string',
        require: true,
    },
    email: {
        type: 'string',
        require: true,
        unique: true
    },
    password: {
        type: 'string',
        require: true,
    },
    resetToken: String,
    expireToken: Date,
    role: {
        type: 'string',
        enum: ['admin', 'publisher', 'employee']
    },
})

const User = mongoose.model('user', UserSchema);
module.exports = User;
