const express = require('express')
const app = express()
const port = 3000

function sumOfAll(n) {
  let sum = 0;
  for( var i = 0; i < n ; i++) {
      sum += i;
  } return sum;

}

function handleFirstReq(req, res) {
  var n = req.query.n;
  var finalAnswer = sumOfAll(n);
  var answer = "The sum is " + finalAnswer;
  res.send(answer);
}

app.post('/handlesum', handleFirstReq);


function started() {
  console.log(`Example app listening on port ${port}`)
}

app.listen(port, started);