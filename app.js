const express = require('express');
const app = express() 
const PORT = process.env.PORT || 8080;

app.get('/',  (req, res) => {
    res.send('Hello TSMs')
});

app.use(express.static('public'))

app.listen(PORT,  () => {
    console.log('Example app listening on port ${PORT}')
});

