'use strict';

const fileReader = require('./lib/read-write-file.js');
const allwhite = require('./lib/all-black.js');
const crossSection = require('./lib/cross-section.js');


fileReader('palette-bitmap.bmp', 'new.bmp', allwhite);
fileReader('palette-bitmap.bmp', 'cross-section.bmp', crossSection);