const express = requiere('expres')
const app = express()
const port = 3000

var myLogger = function (requ, res, next) {
    console.log(req.method + "" + req.url)
    next()
}


app.use(myLogger);
app.use(requesTime);