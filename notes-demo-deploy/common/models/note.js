var request = require('request');

module.exports = function(Note) {
	Note.remoteMethod('weather', {
		accepts: [
	      {arg: 'body', type: 'object', http: { source: 'body' }}
	    ],
	    http: {path: '/weather', verb: 'post'},
	    returns: {arg: 'response', type: 'object'}
	});
	
	Note.weather = function (body, cb) {
		var url = 'http://api.openweathermap.org/data/2.5/weather?zip=66214,us&units=imperial&appid=5b56e90b81d988553e7696ced22ab67e';
		request(url, function(err, response, data) {
			if(err) cb(err, null);
			else {
				data = JSON.parse(data);
				body.weather = data.main;
				Note.create(body,cb);
			}
		});
	}

};
