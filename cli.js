#!/usr/bin/env node

var opts = [];
opts.boolean = ['help'];
var m = require('./index');


// Help
if (m.get('help')) {
    m.helpMessage();
}

