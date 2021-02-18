const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

const port = process.env.port || 8081;

app.set('view engine', 'pug');
app.set('views', './views');

const userRoutes = require('./routes/user');

const errorController = require('./controllers/error');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', userRoutes);

app.use(errorController.get404Page);

app.listen(port, () => {
    console.log(`Server run on,${port}`);
});
