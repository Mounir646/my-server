const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// serve static files
app.use(express.static('public'));

// route /
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
