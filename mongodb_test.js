const mongoose = require('mongoose');
const { Schema } = mongoose; //같은 표현 const Schema = mongoose.Schema;

//mongodb 연결 //nodejs는 database 이름 
mongoose.connect('mongodb://localhost/nodejs', {useNewUrlParser: true});

//user 스키마 정의
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

//model 함수 이용해서 model 생성
//모델을 매핑할 때는 user 라고 단수로 해야 mongoose 내부에서 복수로 만들어서 찾음.
const User = mongoose.model('user', userSchema); //(collections 이름이 uesr)

// data select // find한 결과가 docs에 저장.
User.find({},function(err, docs){
    if(err){
        console.log(err);
    }else{
        console.log(docs);
    }
})

//data insert
const user = new User({
    name: 'kim',
    age: 20,
    married : false
 });
 user.save((err, result) => {
    if(err)
        console.log(err);
    else {
        console.log(result);
    }
 })
 