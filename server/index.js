/* eslint-disable prefer-destructuring */
const express = require('express');
const compression = require('compression');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const grabProduct = require('../database/index.js').grabProduct;

const app = express();

app.use(compression());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = 3008;

// bundle
app.use(express.static(`${__dirname}/../client/dist`));

// api will also deliver the static files. product/:id serves my data
app.get('/api/productreview/:id', (req, res) => {
  const id = req.params.id;
  grabProduct(id, (err, num) => {
    if (err) {
      res.status(404).send();
    }
    res.status(200).send(num);
  });
});

app.post('/api/productreview', (req, res) => {
  // POST a new product with review information
});

app.put('/api/productreview/:id', (req, res) => {
  // PUT a new review for the specified product
});

app.put('/api/productreview/:id/update/:id', (req, res) => {
  // PUT changed information into a specified review
  // for a specified product
});

app.put('/api/productreview/:id/remove/:id', (req, res) => {
  // Use PUT to remove a specified review from a 
  // specified product
});

app.delete('/api/productreview/:id', (req, res) => {
  // DELETE a specified product/review information
});

// the index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist', 'index.html'));
});

app.listen(port, () => console.log(`Now listening on port ${port}!`));
