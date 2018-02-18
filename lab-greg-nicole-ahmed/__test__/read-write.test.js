'use strict';

const readWriteFileHelper = require('../lib/read-write-file.js');
// const constructor = require('../lib/constructor.js');
// const crossSection = require('../lib/cross-section.js');
require('jest');

describe('#cross-section', function() {
  describe('with improper file paths', function() {
    it('should return an error', function(done) {
      readWriteFileHelper([`${__dirname}/data/dont-exist.bmp`], null, function(err) {
        expect(err.code).toEqual('ENOENT');
        expect(err).toBeTruthy();
        done();
      });
    });
  });
  describe('with proper file paths', function() {
    it('should return a proper file name', function(done) {
      readWriteFileHelper(`./palette-bitmap.bmp`, null, function(err, data) {
        // console.log('my error is' , err, '..my data is ', data);
        expect(err).toBe(null);
        expect(data).toBe(`${__dirname}/../pallette-bitmap.bmp`);
        done();
      });
    });
  });
});
//   it('should have the correct order of hex strings', done => {
//     var expectedResult = [];
//     readFileHelper(this.paths, function(err, data) {
//       console.log('data array', data);
//       expect(err).toEqual(null);
//       expect(data[0]).toEqual(expectedResult[0]);
//       expect(data[0]).toEqual(expectedResult[1]);
//       expect(data[0]).toEqual(expectedResult[2]);
//       done();
//     });
//   });
// });
