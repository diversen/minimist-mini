# minimist-mini

Install: 

    npm install --save minimist-mini

Usage: 

~~~js
var mini = require('minimist-mini');

// Opts are the same as in minimist
var opts = [];
opts.boolean = ['help'];
opts.string = ['test'];

// Create object
var m = new mini(opts);

// Check if test is set using --test
var test = m.get('test');
if (test){
    console.log(test);
}

// Check if help is set using --help
// and Output README.md as txt
// if set
//
// You can also set a file from current path, e.g.
// 'docs/cli.md (as param in mini.helpMessage)
//
if (m.get('help')) {
    m.helpMessage();
}
~~~

License: 

MIT 
