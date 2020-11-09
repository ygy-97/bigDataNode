const path = require('path');
let { getFileJson } = require('../utils/utils');
module.exports = async (ctx, next) => {
    await next();
    console.log(ctx.request)
    const url = ctx.request.url;
    let filePath = url.replace('/api', '');
    filePath = '../data' + filePath + '.json';
    filePath = path.join(__dirname, filePath)
    try {
        let data = await getFileJson(filePath);
        ctx.response.body = data;
    } catch (err) {
        let errMsg = {
            message: '读取文件内容失败，文件资源不存在',
            status: 404
        }
        ctx.response.body = errMsg;

    }
    // console.log(data)
}