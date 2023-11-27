const express = require('express')
const app = express()
const routes=require('./routes')
const cors = require('cors')
const bodyParser = require('body-parser')
const db = require('./DbConnection')

app.use(cors())
app.use(bodyParser.json())
app.use("/",routes)

app.listen(4000, ()=>{
    console.log('server running on port 4000');
})