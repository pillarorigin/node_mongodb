// comment 스키마 정의할 파일
const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        required: true, //not null
        unique: true
    },
    age: {
        type: Number,
        required: true
    },
    married: {
        type: Boolean
    },
    comment: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

//userSchema를 exports 할 수 있게 해주기.
module.exports = mongoose.model('User', userSchema);