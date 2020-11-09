let Koa = require('koa');
let app = new Koa();
// app.use((ctx,next)=>{
//     ctx.body = "hello world";
//     console.log('第一层中间件')
//     next();
//     console.log('第一层中间件----1')

// })
let durationFun = require('./middleware/duration');
let headerFun = require('./middleware/header')
let api = require('./middleware/data')
app.use(durationFun)
app.use(headerFun)
app.use(api)


app.listen(8880)
