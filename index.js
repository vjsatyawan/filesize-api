var express = require('express');
var moment = require('moment');
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })

var app = express();


app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get("/", function(request, response) {
  response.render('index');
});


app.post("/file-size", upload.single('file'), function(request, response) {
      response.json({
        "Name": request.file.originalname,
        "Size": request.file.size
      });
});

// app.get("/about", function(request, response) {
//   response.end("Welcome to the about page!");
// });


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


