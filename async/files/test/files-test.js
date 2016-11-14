var expect = require('chai').expect;
var linesCount = require('../src/files');

describe('server-side callback tests', function() {
  it('should pass this canary test', function() {
    expect(true).to.be.true;
  });

  it('should return correct line count for a valid file', function(done) {
    var callback = function(count) {
      expect(count).to.be.eql(15);
      done();
    };
    linesCount('src/files.js', callback);
  });

  it('should report error for an invalid file name', function(done) {
    var onError = function(error) {
      expect(error).to.be.eql('unable to open file src/files1.js');
      done();
    };
    linesCount('src/files1.js', undefined, onError);
  });
});
