const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Welcome to GET page</h1>')
})

app.post('/', (req, res) => {
    res.send('<h1>Welcome to POST page</h1>')
})

app.put('/', (req, res) => {
    
})

app.delete('/', (req, res) => {
    
})

app.listen(3000, () => console.log('listening on port 3000'))
