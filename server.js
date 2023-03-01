const morgan = require('morgan')
const express = require('express');
const app = express();

const PORT = 8081;

// app.get('/home', (req, res) => {
//     res.send('get request');
// });

// app.post('/home', (req, res) => {
//     res.send('post request');
// });

// app.delete('/home', (req, res) => {
//     res.send('delete request');
// });

// app.use((req, res) => {
//     res.send('middleware request');
// });

// ==============response redirect=============
// app.use((req, res) => {
//     res.redirect('https://google.com');
// });
// ==============response status=============
// app.use((req, res) => {
//     res.status(500).json({javascript: 'object'});
// });
// ============Власний middlevere===============
// app.use((req, res, next) => {
//     console.log(`${req.method}, ${req.originalUrl}, ${new Date().toISOString()}`);
//     next();
// });

app.use(express.json());
// парсити стандартний html=========
app.use(express.urlencoded({extended: true})); 
app.use(express.static('public')); 
app.use(morgan('tiny'));

// app.use((req, res, next) => {
//     console.log(`${req.method}, ${req.originalUrl}, ${new Date().toISOString()}`);
//     next();
// });

// app.post('/home', (req, res) => {
//     console.log(req.body);
//     res.json({javascript: 'object', body: req.body});
// });
// ===================валідація запита=================
app.post('/home', (req, res) => {
    if (!req.body.goit) {
        return res.status(400).json({status: 'goit parameter is required'})
    }
    res.json({javascript: 'object', body: req.body});
});

app.listen(PORT, (err) => {
    if (err) console.error('Error at aserver launch', err);
    console.log(`Server works at port ${PORT}!`);
});