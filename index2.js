const bodyParser = require('body-parser');
const express = require('express')
const app = express()
const port = 3000

app.use(bodyParser.json());

function sumOfAll(n) {
  let sum = 0;
  for( var i = 0; i <= n ; i++) {
      sum += i;
  } return sum;

}

// function middleware1(req, res, next) {
//     console.log("from mddleware" + req.headers.n);
//     next();
// }

// app.use(middleware1);

function handleFirstReq(req, res) {
  var counter = req.body.counter;
  if( counter < 10000) {
    var answer = sumOfAll(counter);
    var Finalanswer = "The sum is " + answer;
    res.send(Finalanswer);
  } else  {
    res.status(411).send("Thats a big number mate!")
  }
  
}

app.post('/handlesum', handleFirstReq);


function started() {
  console.log(`Example app listening on port ${port}`)
}

app.listen(port, started);