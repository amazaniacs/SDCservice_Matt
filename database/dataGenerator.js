/* eslint-disable no-console */
/* eslint-disable camelcase */
// eslint-disable-next-line prefer-destructuring
// CURRENTLY OPTIMIZED FOR POSTGRESQL
const faker = require('faker');
const fs = require('fs');

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

const names = ['Matt', 'Bob', 'Dolan', 'Greg', 'Darth Vader', 'Minerva', 'Aracely', 'She-ra', 'Marvel', 'Trish'];

const categories = [
  'electronics',
  'beauty',
  'outdoor',
  'wearables',
  'bath',
  'clothing',
  'board games',
  'food',
  'toys',
  'jewelery',
];

const number = 10000000;

const writeNTimes = (file, num, encoding, callback) => {
  let i = 1;
  const write = () => {
    let statusGood = true;
    while (i <= num && statusGood) {
      const product_review = {
        id: i,
        product_name: `Amazon Product ${i}`,
        category: categories[i % 10],
        rating: 0,
        total_reviews: 0,
        no_one_star_reviews: 0,
        no_two_star_reviews: 0,
        no_three_star_reviews: 0,
        no_four_star_reviews: 0,
        no_five_star_reviews: 0,
        customer_images: ['string1', 'string2'],
        reviews_by_feature: [{ key: 'value' }, { key: 'value' }],
        reviews_by_interests: [{ key: 'value' }, { key: 'value' }],
        review_info: [],
      };
      for (let j = 1; j <= Math.floor(Math.random() * 10) + 1; j += 1) {
        const singleReview = {
          product_id: product_review.id,
          product_name: product_review.product_name,
          product_category: product_review.category,
          review_rating: Math.floor(Math.random() * 5) + 1,
          review: faker.lorem.sentences(),
          review_title: faker.lorem.sentence(),
          reviewer: faker.name.findName(),
          images: generateImages(),
          verified_purchase: data.verified_purchase[Math.floor(Math.random()
            * data.verified_purchase.length)],
          helpful_counter: Math.floor(Math.random() * 500) + 1,
          created_at: faker.date.past().toDateString(),
        };
        product_review.review_info.push(singleReview);
        product_review.total_reviews += 1;
        if (singleReview.review_rating === 1) {
          product_review.no_one_star_reviews += 1;
        }
        if (singleReview.review_rating === 2) {
          product_review.no_two_star_reviews += 1;
        }
        if (singleReview.review_rating === 3) {
          product_review.no_three_star_reviews += 1;
        }
        if (singleReview.review_rating === 4) {
          product_review.no_four_star_reviews += 1;
        }
        if (singleReview.review_rating === 5) {
          product_review.no_five_star_reviews += 1;
        }
        product_review.rating += singleReview.review_rating;
      }
      const avgScore = product_review.rating / product_review.total_reviews;
      product_review.rating = avgScore.toFixed(1);

      if (i === num) {
        statusGood = file.write(`${product_review.id},${product_review.product_name},${product_review.category},${product_review.total_reviews},${product_review.rating},${product_review.no_one_star_reviews},${product_review.no_two_star_reviews},${product_review.no_three_star_reviews},${product_review.no_four_star_reviews},${product_review.no_five_star_reviews}\n`, encoding, callback);
      } else {
        statusGood = file.write(`${product_review.id},${product_review.product_name},${product_review.category},${product_review.total_reviews},${product_review.rating},${product_review.no_one_star_reviews},${product_review.no_two_star_reviews},${product_review.no_three_star_reviews},${product_review.no_four_star_reviews},${product_review.no_five_star_reviews}\n`, encoding);
      }
      i += 1;
    }
    if (i < num) {
      file.once('drain', write);
    }
  };
  write();
};

const writeReviews = (file, num, encoding, callback) => {
  let i = 1;
  let counter = 1;
  const write = () => {
    let statusGood = true;
    while (i <= num && statusGood) {
      for (let j = 1; j <= Math.floor(Math.random() * 2) + 1; j += 1) {
        const singleReview = {
          id: counter,
          product_id: i,
          product_name: `Amazon Product ${i}`,
          product_category: categories[i % 10],
          review_rating: Math.floor(Math.random() * 5) + 1,
          review: faker.lorem.sentences(),
          review_title: faker.lorem.sentence(),
          reviewer: names[Math.floor(Math.random() * names.length)],
          verified_purchase: data.verified_purchase[Math.floor(Math.random()
            * data.verified_purchase.length)],
          helpful_counter: Math.floor(Math.random() * 500) + 1,
          created_at: faker.date.past().toDateString(),
        };
        counter += 1;

        if (i === num) {
          statusGood = file.write(`${singleReview.id},${singleReview.review_rating},${singleReview.review},${singleReview.review_title},${singleReview.reviewer},${singleReview.verified_purchase},${singleReview.helpful_counter},${singleReview.created_at},${singleReview.product_id},${singleReview.product_name},${singleReview.product_category}\n`, encoding, callback);
        } else {
          statusGood = file.write(`${singleReview.id},${singleReview.review_rating},${singleReview.review},${singleReview.review_title},${singleReview.reviewer},${singleReview.verified_purchase},${singleReview.helpful_counter},${singleReview.created_at},${singleReview.product_id},${singleReview.product_name},${singleReview.product_category}\n`, encoding);
        }
      }
      i += 1;
    }
    if (i < num) {
      file.once('drain', write);
    }
  };
  write();
};

const file = fs.createWriteStream('./data.csv', { enconding: 'utf8' });
const file2 = fs.createWriteStream('./reviews.csv', { enconding: 'utf8' });

writeNTimes(file, number, 'utf8', (err) => {
  if (err) {
    console.log(`something bad happened, ${err}`);
  } else {
    console.log('we all good!');
  }
});

writeReviews(file2, number, 'utf8', (err) => {
  if (err) {
    console.log(`something bad happened, ${err}`);
  } else {
    console.log('we all good!');
  }
});