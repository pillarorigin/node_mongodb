// mongodb 연결 코드 넣을 파일
const mongoose = require('mongoose');

//mongodb 연결
module.exports = () => {
    mongoose.connect('mongodb://localhost/nodejs', {
        useNewUrlParser: true
    }, (err) => {
        if (err) {
            console.log('mongodb 연결 오류..');
        } else {
            console.log('mongodb 연결 성공..');
        }
    });

    //mongoose에 이벤트 달기
    mongoose.connection.on('error', (error) => {
        console.log('mongodb 연결 에러..');
    })
    mongoose.connection.on('disconnected', () => {
        console.log('mongodb 연결 끊어짐.');
    })
};