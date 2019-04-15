var mysql = require('mysql');

module.exports = {
    getData: function(sql, param, callback){
        var connection = mysql.createConnection({
            host: 'db4free.net',
            user: 'pharmecy',
            password: '963214785',
            database: 'pharmecy'
        });

        connection.connect(function(err){
            if(err)
            {
                console.log('error connecting database ...');
            }
        });
        if(param == null)
        {
            connection.query(sql, function(err, result){
                callback(result);
            });
        }
        else
        {
            connection.query(sql, param, function(err,result){
                callback(result);
            });
        }
    }
};
