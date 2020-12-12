const express = require('express')
const app = express()
const port = 8000
const router = require('./routers/router')
const bodyParse = require('body-parser')

app.use(bodyParse.urlencoded({ extended: false }));
app.use(bodyParse.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header('Access-Control-Allow-Credentials', 'true')
    res.header("Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS");
    next();
});

app.use('/',router)

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
