'use strict';


const fileReader = require('./lib/read-write-file.js');
const crosses = require('./lib/crosses.js');
const darken = require('./lib/darken.js');
// const lighten = require('./lib/lighten.js');
const random = require('./lib/randomPixels.js');

fileReader('palette-bitmap.bmp', 'darkened.bmp', darken);
// fileReader('palette-bitmap.bmp', 'lightened.bmp', lighten);
fileReader('palette-bitmap.bmp', 'random.bmp', random);
fileReader('palette-bitmap.bmp', 'crosses.bmp', crosses);

