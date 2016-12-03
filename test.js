var mini = require('./index');

// Opts are the same as in minimist
var opts = [];
opts.boolean = ['help'];
opts.string = ['test'];

// Create object
var m = new mini(opts);
console.log(m);

// Check if test is set
var test = m.get('test');
if (test){
    console.log(test);
}

// Check if help is set
// and Output README.md as txt
// if set
//
// You can also set a file from current path, e.g.
// 'docs/cli.md
//

if (m.get('help')) {
    m.helpMessage();
}
