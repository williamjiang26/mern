const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
const dotenv = require('dotenv')
dotenv.config();

app.get("/api/test", (req,res) => {
    res.json( 'hello world' + Date.now())
});


if (process.env.API_PORT){
    app.listen(process.env.API_PORT)
}

module.exports = app
