var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.connect('localhost:27017/test');
var Schema = mongoose.Schema;

var userDataSchema = new Schema({
  title: {type: String, required: true},
  content: String,
  author: String
}, {collection: 'userdata'});

var UserData = mongoose.model('UserData', userDataSchema);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

// Create
router.post('/insert', function(req, res, next) {
  var item = {
    title: req.body.title,
    content: req.body.content,
    author: req.body.author
  };

  var data = new UserData(item);
  data.save();

  res.redirect('/');
});

// Read
router.get('/data', function(req, resp, next){

});

router.get('/comments', function(req, resp, next){

});

// Update
router.post('/update', function(req, resp, next){

});

router.post('/comments/:addcomment', function(req, resp, next){

});

// Delete
router.post('delete', function(req, resp, next){

});

module.exports = router;
