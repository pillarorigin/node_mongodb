//comment 스키마 (comment 정보는 일반 정보가 아니고 오브젝트 타입)
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//js는 오브젝트 타입이 뭔지 모르니 알려줘야 함.
const ObjectId = Schema.Types.ObjectId;
//const ObjectId = {Type:{Object}}

const commentSchema = new Schema({
    commenter:{
         type: ObjectId,
         required: true,
         ref: 'User'
    },
    comment: {
        type:String,
        require: true
    },
    createAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Comment',commentSchema);
