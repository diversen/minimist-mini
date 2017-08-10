#!/usr/bin/env node

var m = require('./index')();

// Help
if (m.get('help') || m.get('h')) {
    m.helpMessage();
}

