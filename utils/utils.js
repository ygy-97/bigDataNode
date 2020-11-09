const fs = require('fs')
exports.getFileJson = (url) => {
    return new Promise((resolve,reject)=>{
        fs.readFile(url,'utf-8',(err,data)=>{
            if(err){
                reject(err)
            }
            resolve(data)
        })
    })
}
