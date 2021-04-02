const cors = require('cors');
var express = require('express');

var app = express();

app.set('view engine', 'ejs');
app.use(cors());
// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded());
// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.listen(3001);


app.post('/submission', function(req, res) {
    console.log(req.body.someData);
    res.json({ test: 'test data' });
});
