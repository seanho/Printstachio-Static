var koa = require('koa');
var app = koa();

app.use(function *(){
  this.body = 'Printstachio!';
});

var post = process.env.PORT || 3000;

app.listen(post);