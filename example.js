const process = require('process');

// Options are exactly as in minimist
const opts = [];
opts.boolean = ['help'];
opts.string = ['option1'];
opts.string = ['options2'];
opts.default = { options1: 'default value' };
opts.alias = { h: 'help' };

const minimistMini = require('./index')(opts);

// Check if help is defined, and log the value.
var help = minimistMini.getOption('h');
if (help){
    // Default help is generated from README.md or readme.md
    // Or you may specify a file in from your package
    console.log(minimistMini.helpMessage())
    process.exit(0);
}

// Get single option
console.log("value of option 'option1':");
console.log(minimistMini.getOption('option1'));

// Get all options
console.log("all options:");
console.log(minimistMini.getOptions());

// Get single argument
console.log("value of argument 0:");
console.log(minimistMini.getArgument(0));

// Get all arguments
console.log("all arguments:");
console.log(minimistMini.getArguments());