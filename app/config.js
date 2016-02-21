var Config = function(){

	var fs = require('fs');
	var data = {};

	var _init = function(){

		var content = fs.readFileSync('./config.json', 'utf8');
		data = JSON.parse(content);

	};

	var json = function(){
		return data;
	};

	// constructor
	_init();
	// public return
	return {
		json: json
	}

};

module.exports = Config();