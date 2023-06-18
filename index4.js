const bodyParser = require('body-parser');
const express = require('express')
const app = express()
const port = 3000

app.use(bodyParser.json());

function sumOfAll(n) {
  let sum = 0;
  for( var i = 1; i <= n ; i++) {
      sum += i;
  } return sum;

}
function mulOfAll(n) {
    let answer = 1;
    for( var i = 1; i <= n ; i++) {
        answer *= i;
    } return answer;
  
  }
// function middleware1(req, res, next) {
//     console.log("from mddleware" + req.headers.n);
//     next();
// }

// app.use(middleware1);

function handleFirstReq(req, res) {
  var counter = req.body.counter;

    var answersum = sumOfAll(counter);
    var answermul = mulOfAll(counter);

    var answerObject = {
        sum: answersum,
        mul: answermul,
    };
    res.status(200).send(answerObject); 
}

function givePage(req, res) {
    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Hello Shiv From 100x</title>
    </head>
    <body>
        <b> HI there!</b>
    </body>
    </html>`)
}
app.get('/', givePage);

function givePage2(req, res) {
    res.sendFile(__dirname + "/index2.html")
}
app.get('/2', givePage2);



app.post('/handlesum', handleFirstReq);


function started() {
  console.log(`Example app listening on port ${port}`)
}

app.listen(port, started);