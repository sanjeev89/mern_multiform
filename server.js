const express = require('express')
const app = express();

const bodyParser = require('body-parser')
app.use(bodyParser.json())

app.use('/api', require('./routes/form'))


const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log("Server started on port ", PORT))

