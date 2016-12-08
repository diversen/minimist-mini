// Opts are the same as in minimist

// You don't really need opts
// var m = require('./index')();

// If you use opts then they will 
// be cast as your opts declare

const opts = [];
opts.boolean = ['help'];
opts.string = ['test'];

var m = require('./index')(opts);

// Any arguments without -- or -, e.g. files
// console.log(m.parsed._);

// Check if test is defined, and log it.
var test = m.get('test');
if (test){
    console.log(test);
}

// Check if help is set
// and Output README.md as txt if set
//
// You can also set a file from current path, e.g.
// 'docs/cli.md

if (m.get('help')) {
    m.helpMessage();
}
