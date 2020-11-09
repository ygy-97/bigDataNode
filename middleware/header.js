//请求头设置中间件
module.exports = async (ctx, next) => {
    let contentType = 'application/json;chartset="utf-8"'
    ctx.set('Content-Type', contentType);
    // ctx.set('Access-Control-Allow-Origin',"*")//跨域设置
    ctx.set('Access-Control-Allow-Methods',"options,get,put,post,delete")
    // ctx.response.body = 'success';
    await next();
}