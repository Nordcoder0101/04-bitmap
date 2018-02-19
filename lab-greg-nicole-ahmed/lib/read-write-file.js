'use strict';

const constructor = require('./constructor.js');
const fs = require('fs');
const path = require('path');


const readWriteFileHelper = module.exports = function(file, newFile, callback) {

  let filePathRead = path.join(`${__dirname}`, '..', 'data', `${file}`);
  let filePathWrite = `${__dirname}/../data/${newFile}`;

  fs.readFile(filePathRead, function(err, data){
    if (err) return callback(err);
    
    let bitMap = constructor(data);
    
    callback(null, bitMap);
    
    // let newBitmapObj = callback(null, bitMap);
    
    // let newBitmapTotal = bitMap.header + newBitmapObj.colorPalette + newBitmapObj.colorString + bitMap.end;
    // let newBitmap = Buffer.from(newBitmapTotal, 'hex');

         
    // fs.writeFile(filePathWrite, newBitmap, 'hex', function(err, data){
    //   if (err) return callback(err);
      

    //   callback(null, data);

  });
  
};