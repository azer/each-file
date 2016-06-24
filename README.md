## each-file

Read contents of each file matching given glob. Runs a parallel loop.

## Install

```bash
$ npm install azer/each-file
```

## Usage

```js
var eachFile = require('each-file')

eachFile(["./components/*.js", "./containers/*.js"], each, function (error) {
  if (error) throw error
})

function each (content, filename, callback) {
  console.log(filename, content)
  callback() // must be called to finish the loop
}
```
