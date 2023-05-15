const express = require('express');
const app = express();

// Part 1
// app.use(express.static('assets'));

// Part 2
// app.use('/scripts', express.static('assets/scripts'));

// Part 3
app.use('/stylesheets', express.static('assets/css'));

const port = 5001;
app.listen(port, () => console.log('Server is listening on port', port));
