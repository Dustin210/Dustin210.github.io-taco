var orm = require('../orm');

var taco = {
    all: function(cb){
        orm.all('tacos', function(res){
            cb(res);
        })
    }
}

module.exports = taco;