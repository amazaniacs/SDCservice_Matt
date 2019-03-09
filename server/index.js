/* eslint-disable prefer-destructuring */
require('newrelic');
const express = require('express');
const compression = require('compression');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const grabProduct = require('../database/index.js').grabProduct;
const deleteProduct = require('../database/index.js').deleteProduct;
const deleteReviews = require('../database/index.js').deleteReviews;
const deleteReview = require('../database/index.js').deleteReview;
const editReview = require('../database/index.js').editReview;
const postProduct = require('../database/index.js').postProduct;
const postReview = require('../database/index.js').postReview;

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
  // GET product info and its reviews
  const id = req.params.id;
  grabProduct(id, null, (err, num) => {
    if (err) {
      res.status(404).send();
    }
    res.status(200).send(num);
  });
});

app.post('/api/productreview', (req, res) => {
  // POST a new product
  postProduct(req.body, (err) => {
    if (err) {
      res.status(400).send();
    }
    res.status(201).send();
  })
});

app.post('/api/productreview/:id', (req, res) => {
  // POST a new review for the specified product
  const id = req.params.id;
  postReview(id, req.body, (err) => {
    if (err) {
      res.status(400).send();
    }
    res.status(201).send();
  })
});

app.put('/api/review/:id', (req, res) => {
  // PUT changed information into a specified review
  const id = req.params.id;
  editReview(id, req.body, (err) => {
    if (err) {
      res.status(400).send();
    }
    res.status(201).send();
  })
});

app.delete('/api/review/:id', (req, res) => {
  // Use DELETE to remove a specified review 
  const id = req.params.id;
  deleteReview(id, (err) => {
    if (err) {
      res.status(400).send();
    }
    res.status(204).send();
  });
});

app.delete('/api/productreview/:id', (req, res) => {
  // DELETE a specified product and its reviews
  const id = req.params.id;
  deleteProduct(id, (err) => {
    if (err) {
      res.status(400).send();
    }
    res.status(204).send();
  });
  deleteReviews(id, (err) => {
    if (err) {
      res.status(400).send();
    }
    res.status(204).send();
  });
});

// the index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist', 'index.html'));
});

app.listen(port, () => console.log(`Now listening on port ${port}!`));
