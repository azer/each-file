var test = require("prova");
var each = require("./");

test('should iterate all the files with their contents', function (t) {
  t.plan(2);

  each("./*.md", function (filename, content, callback) {
    t.equal(filename, "./README.md")
    t.ok(content.indexOf("npm install azer/each-file") > -1)
  }, t.end);
});
