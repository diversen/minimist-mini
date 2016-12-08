#!/usr/bin/env node

var m = require('./index')();

// Help
if (m.get('help')) {
    m.helpMessage();
}

