// Create web server with express
const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

// Use the static files from the public folder
app.use(express.static('public'));

// Read the comments from the file
app.get('/comments', (req, res) => {
    fs.readFile(path.join(__dirname, 'comments.json'), (err, data) => {
        if (err) {
            res.status(500).send('Unable to read the comments file');
        } else {
            res.send(data);
        }
    });
});

// Add a new comment to the file
app.post('/comments', express.json(), (req, res) => {
    fs.readFile(path.join(__dirname, 'comments.json'), (err, data) => {
        if (err) {
            res.status(500).send('Unable to read the comments file');
        } else {
            const comments = JSON.parse(data);
            comments.push(req.body);
            fs.writeFile(path.join(__dirname, 'comments.json'), JSON.stringify(comments), (err) => {
                if (err) {
                    res.status(500).send('Unable to write the comments file');
                } else {
                    res.send('Comment added');
                }
            });
        }
    });
});

// Listen on port 3000
app.listen(3000, () => {
    console.log('Server listening on port 3000');
});