/**
 * Created by puchen on 8/12/16.
 */
var configValues = require('./config'); //config.json

module.exports = {
    getDbConnectionString: function () {
        return 'mongodb://' + configValues.uname + ':' + configValues.pwd +
                '@ds153815.mlab.com:53815/todo_db_pu';
    }
}