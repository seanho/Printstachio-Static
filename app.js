var koa = require('koa');
var app = koa();

app.use(function *(){
  this.body = 'Printstachio!';
});

app.listen(process.env.PORT || 3000);