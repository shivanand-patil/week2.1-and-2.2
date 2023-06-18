function longResponseBody(jsonBody) {
    console.log(jsonBody);
}

function callbackFn(result) {
    result.json().then(longResponseBody)
}

var sendObj = {
    method:"GET"
};

fetch("http://localhost:3000/handlesum", sendObj ).then(callbackFn);