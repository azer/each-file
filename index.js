var glob = require("flat-glob");
var loop = require("parallel-loop");
var fs = require("fs");

module.exports = eachFile;

function eachFile (wildcards, eachfn, callback) {
  if (!Array.isArray(wildcards)) {
    wildcards = [wildcards];
  }

  glob(wildcards, function (error, filenames) {
    if (error) return callback(error);

    loop(filenames.length, each, callback);

    function each (done, ind) {
      fs.readFile(filenames[ind], function (error, bf) {
        eachfn(filenames[ind], bf.toString(), done);
      });
    }
  });
}
