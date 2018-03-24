'use strict';

const constructor = require('./constructor.js');
const fs = require('fs');
const path = require('path');


module.exports = function(file, newFile, callback) {
  let filePathRead = path.join(__dirname, '..', 'data', file);
  let filePathWrite = `${__dirname}/../data/${newFile}`;

  fs.readFile(filePathRead, function(err, data){ 
    let bitMap = constructor(data);
    let newBitmapObj = callback(bitMap);
    let newBitmapTotal = bitMap.header + newBitmapObj.colorPalette + newBitmapObj.colorString + bitMap.end;
    let newBitmap = Buffer.from(newBitmapTotal, 'hex');
    fs.writeFile(filePathWrite, newBitmap, 'hex', () => {
      console.log('file written successfully! go check out your pretty picture!');
    });
  });
};