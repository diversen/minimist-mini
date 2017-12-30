# minimist-mini

A wrapper around minimist that automagically generates documentation from
your module's `README.md` or `readme.md` file. It reads the .md file and parses it for display in
your console application. 

## Install: 

    npm install --save minimist-mini

## Usage: 

```.js
// Opts are the same as in minimist

// Opts are not required. You can do like this:
// var m = require('minimist-mini')();

// If you use opts then they will 
// be cast as your opts are declared

// E.g.
const opts = [];
opts.boolean = ['help']; // true or false
opts.string = ['test']; // string

var m = require('minimist-mini')(opts);

// Check if test is set and log it.
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
```

## License: 

MIT © [Dennis Iversen](https://github.com/diversen)
