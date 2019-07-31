var express = require('express');
var router = express.Router();
var Users = require('../schemas/user');
var Comments = require('../schemas/comment'); //모델

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('mongoose.html', { title: 'Express' });
});

/* GET user */
router.get('/users', function (req, res, next) {
    Users.find({}, (err, result) => {
        if (err) console.log(err);
        else {
            console.log(result);
            res.json(result);
        }
    });
})

//post호 api/users로 오면 
router.post('/users', function (req, res, next) {
    const user = new Users({
        name: req.body.name,
        age: req.body.age,
        married: req.body.married
    });
    user.save((err, result) => {
        if (err) console.log(err);
        else {
            console.log(result);
            res.status(201).json(result); //200번대면 잘처리가 돴다.
        }
    })
});


/* GET Comments */
router.get('/comments/:id', function (req, res, next) {
    
    /* 일반 find */
    // Comments.find({}, (err, result) => {
    //     if (err) console.log(err);
    //     else {
    //         console.log(result);
    //         res.json(result);
    //     }
    // });
    
    /* populate */
    Comments.find({ commenter: req.params.id }).populate('commenter').exec((err, results) => {
        if(err) console.log(err);
        else {
          console.log(results);
          res.json(results);
        }
      })
    });

//post호 api/users로 오면 
router.post('/comments', function (req, res, next) {
    const comment = new Comments({
        commenter: req.body.id,
        comment: req.body.comment,
    });
    comment.save((err, result) => {
        if (err) console.log(err);
        else {
            console.log(result);
            res.status(201).json(result); //200번대면 잘처리가 돴다.
        }
    })
});
    module.exports = router;
