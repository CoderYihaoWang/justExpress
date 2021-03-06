const express = require('express');
const helmet = require('helmet');
const app = express();

app.use(helmet());

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/ajax', (req, res, next) => {
    console.log(req);
    res.json(['Test']);
});

app.listen(3000, () => console.log('Listening on port 3000...'));