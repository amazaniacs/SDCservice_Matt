/* eslint-disable no-console */
/* eslint-disable camelcase */
const mongoose = require('mongoose');
const faker = require('faker');

require('dotenv').config({ path: '../.env' });

mongoose.connect('mongodb://localhost/products', { useNewUrlParser: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connection is open');
});

// eslint-disable-next-line prefer-destructuring
const Schema = mongoose.Schema;
const reviewSchema = new Schema({
  product_id: Number,
  category: String,
  product_name: String,
  product_ratings: Number,
  review: String,
  review_title: String,
  reviewer: String,
  images: [],
  verified_purchase: Boolean,
  helpful_counter: Number,
  created_at: String,
});

const Review = mongoose.model('Review', reviewSchema);

Review.deleteMany({}, () => {
  console.log('Database running');
});

const data = {
  category: ['shoes', 'electronics', 'apparel', 'auto', 'health', 'lifestyle', 'tech', 'furniture',
    'splurge', 'food'],
  verified_purchase: [true, false],
};

const generateImages = () => {
  const imgs = [];
  imgs.push(faker.image.food());
  imgs.push(faker.image.cats());
  imgs.push(faker.image.animals());
  imgs.push(faker.image.nature());
  return imgs;
};

for (let i = 0; i <= 100; i += 1) {
  for (let j = 0; j <= Math.floor(Math.random() * 6) + 1; j += 1) {
    const review_instance = new Review({
      product_id: i,
      category: data.category[Math.floor(Math.random() * data.category.length)],
      product_name: faker.commerce.productName(),
      product_ratings: Math.floor(Math.random() * 5) + 1,
      review: faker.lorem.sentences(),
      review_title: faker.lorem.sentence(),
      reviewer: faker.name.findName(),
      images: generateImages(),
      verified_purchase: data.verified_purchase[Math.floor(Math.random()
        * data.verified_purchase.length)],
      helpful_counter: Math.floor(Math.random() * 500) + 1,
      created_at: faker.date.past().toDateString(),
    });
    review_instance.save((err) => {
      if (err) {
        console.log(err);
      }
    });
  }
}

function grabProduct(productid, callback) {
  Review.find({ product_id: productid }, (err, num) => {
    if (err) {
      callback(err);
    }
    callback(null, num);
  });
}

module.exports.grabProduct = grabProduct;
