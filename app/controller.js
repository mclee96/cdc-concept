var request = require('request')

module.exports = {
  doSomething : doSomething
}

function doSomething(req, res) {
  request("http://angular.io", (error, response, body) =>
      onRes(error, response, body, res) )
}

function onRes(error, response, body, res) {
  if (error)
    res.end(error)
  res.end(body)
}
