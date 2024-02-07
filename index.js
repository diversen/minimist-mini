var getVal = require('get-value');
var fs = require('fs');
var path = require('path');
var removeMd = require('remove-markdown');

/**
 * Generate a help message from a file, default is README.md or readme.md
 * @param {*} filename 
 * @returns 
 */
function getHelpMessage(filename) {
    const scriptPath = fs.realpathSync(process.argv[1]);
    const dirname = path.dirname(scriptPath);

    let helpFile = null;

    // List of potential help files
    const potentialFiles = filename ? [filename, 'README.md', 'readme.md'] : ['README.md', 'readme.md'];

    for (const file of potentialFiles) {
        const filePath = path.join(dirname, file);
        if (fs.existsSync(filePath)) {
            helpFile = filePath;
            break;
        }
    }

    if (!helpFile) {
        throw new Error('No help file found');
    }

    const help = fs.readFileSync(helpFile, { encoding: 'utf8' });
    return removeMd(help);
};

function mini(opts) {

	// Parse with minimist
	this.argv = require('minimist')(process.argv.slice(2), opts);
	this.options = {}

	// Iterate over argv and set options
	for (var key in this.argv) {
		if (key === '_') {
			continue;
		}
		this.options[key] = this.argv[key];	
	}

	// Set arguments
	this.arguments = this.argv._;

	/**
	 * console.log a help message from a file, defaults to README.md or readme.md
	 * @param {*} filename 
	 */
	this.helpMessage = function (filename) {
		console.log(getHelpMessage(filename));
	};

	/**
	 * Get a single option by index, e.g. 'h' or 'help'
	 * @param {*} index 
	 * @returns The value of the option or undefined
	 */
	this.getOption = function (index) {
		return getVal(this.options, index);
	}

	/**
	 * @returns All options
	 */
	this.getOptions = function () {
		return this.options;
	}

	/**
	 * Get a single argument by index, e.g. 0, 1, 2
	 * @param {*} index 
	 * @returns The value of the argument or undefined
	 */
	this.getArgument = function (index) {
		return this.arguments[index];
	}

	/**
	 * 
	 * @returns All arguments
	 */
	this.getArguments = function () {
		return this.arguments;
	}

	return this;
};

module.exports =  function(opts) {
	return new mini(opts);
}
