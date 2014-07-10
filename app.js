var koa = require('koa'),
    serve = require('koa-static');

var app = koa();

app.use(serve('./public'));
app.use(function *(){
  this.body = 'Printstachio!';
});

var post = process.env.PORT || 3000;

app.listen(post);
