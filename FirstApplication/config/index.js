var configValues = require('./config');

module.exports = {
    getDbConnectionString: function(){
        return 'mongodb://' + configValues.uname + 
            ':' + configValues.pwd + '@ds263988.mlab.com:63988/mynodetodo';
    }
}