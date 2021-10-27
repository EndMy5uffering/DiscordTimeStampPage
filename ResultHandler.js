const fs = require("fs")

const send = (path, type, errorCallback) => {
    return function(req, res){
        fs.readFile(path, (err, data) => {
            if(err){
                if(errorCallback){
                    errorCallback(err)
                }else{
                    console.log(err);
                    res.status(404);
                    res.end();
                }
            }else{
                res.status(200);
                res.type(type);
                res.send(data);
                res.end();
            }
        });
    }
}

module.exports = {
    send : send
}