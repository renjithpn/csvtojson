var express = require('express');


var app = express();

app.get('/', function(req, resp){
  resp.json({"success": "yes"});
});

app.listen(3000, function(){
  console.log("server started at port 30nn00");
});
