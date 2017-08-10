var getVal = require('get-value');
var fs = require('fs');
var path = require('path');
var removeMd = require('remove-markdown');

function mini(opts) {

	// Parse with minimist
	this.parsed = require('minimist')(process.argv.slice(2), opts);
	
	// Help function
	this.helpMessage = function (filename) {
		
		var scriptPath = process.argv[1];
		scriptPath = fs.realpathSync(scriptPath);
		
		var helpFile = false;
		var dirname = path.dirname(scriptPath);
		if (filename && fs.existsSync(dirname + '/' + filename)) {
			helpFile = dirname + '/' + filename;
		}
		if (helpFile === false) {
			if (fs.existsSync(dirname + '/README.md')) {
				helpFile = dirname + '/README.md';
			}
			
			if (fs.existsSync(dirname + '/readme.md')) {
				helpFile = dirname + '/readme.md';
			}
			
		}
		
		if (!helpFile) {
			console.log('No help. In order to give help add a README.md to your CLI program');
		} else {
			var help = fs.readFileSync(helpFile, {encoding: 'utf8'});
			console.log(removeMd(help));
		}
	};

	// Get value from parsed argv
	this.get = function (index) {
		return getVal(this.parsed, index);
	};
	
	return this;
};

module.exports =  function(opts) {
	return new mini(opts);
}
