/* eslint-disable no-console */
/* eslint-disable camelcase */
// eslint-disable-next-line prefer-destructuring
// CURRENTLY OPTIMIZED FOR MONGODB
const faker = require('faker');
const fs = require('fs');
// const EventEmitter = require('events');

// class MyEmitter extends EventEmitter {};

// const myEmitter = new MyEmitter();
// myEmitter.on('event', () => {
//   console.log('an event occurred!');
// });



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
  'jewelery'
];

// const generatedData = [];

// file.setMaxListeners(0);
// file.write('[');
const number = 10000000 + 1;

const writeNTimes = (file, number, encoding, callback) => {
  let i = 1;
  
  const write = () => {
    let statusGood = true;
    while (i <= number && statusGood) {
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
        reviews_by_feature: [{key: 'value'}, {key: 'value'}],
        reviews_by_interests: [{key: 'value'}, {key: 'value'}],
        review_info: []
      }
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
        product_review.rating = product_review.rating + singleReview.review_rating;
      }
      const avgScore = product_review.rating / product_review.total_reviews;
      product_review.rating = avgScore.toFixed(1);

      if (i === number) {
        file.write(JSON.stringify(product_review), encoding, callback);
      } else {
        statusGood = file.write(JSON.stringify(product_review) + ',', encoding);
      }
      i ++;
    }
    if (i < number) {
      file.once('drain', write);
    }
  }
  write();
}

const file = fs.createWriteStream('./data.json', {enconding: 'utf8'});

writeNTimes(file, number, 'utf8', (err) => {
  if (err) {
    console.log('something bad happened' + err);
  } else {
    console.log('we all good!');
  }
})

// file.end(']');
console.log('FILE IS WRITTEN');

// for (let i = 1; i <= number; i += 1) {
//   const product_review = {
//     id: i,
//     product_name: `Amazon Product ${i}`,
//     category: categories[i % 10],
//     rating: 0,
//     total_reviews: 0,
//     no_one_star_reviews: 0,
//     no_two_star_reviews: 0,
//     no_three_star_reviews: 0,
//     no_four_star_reviews: 0,
//     no_five_star_reviews: 0,
//     customer_images: ['string1', 'string2'],
//     reviews_by_feature: [{key: 'value'}, {key: 'value'}],
//     reviews_by_interests: [{key: 'value'}, {key: 'value'}],
//     review_info: []
//   }
//   for (let j = 1; j <= Math.floor(Math.random() * 10) + 1; j += 1) {
//     const singleReview = {
//       product_id: product_review.id,
//       product_name: product_review.product_name,
//       product_category: product_review.category,
//       review_rating: Math.floor(Math.random() * 5) + 1,
//       review: faker.lorem.sentences(),
//       review_title: faker.lorem.sentence(),
//       reviewer: faker.name.findName(),
//       images: generateImages(),
//       verified_purchase: data.verified_purchase[Math.floor(Math.random()
//         * data.verified_purchase.length)],
//       helpful_counter: Math.floor(Math.random() * 500) + 1,
//       created_at: faker.date.past().toDateString(),
//     };
//     product_review.review_info.push(singleReview);
//     product_review.total_reviews += 1;
//     if (singleReview.review_rating === 1) {
//       product_review.no_one_star_reviews += 1;
//     }
//     if (singleReview.review_rating === 2) {
//       product_review.no_two_star_reviews += 1;
//     }
//     if (singleReview.review_rating === 3) {
//       product_review.no_three_star_reviews += 1;
//     }
//     if (singleReview.review_rating === 4) {
//       product_review.no_four_star_reviews += 1;
//     }
//     if (singleReview.review_rating === 5) {
//       product_review.no_five_star_reviews += 1;
//     }
//     product_review.rating = product_review.rating + singleReview.review_rating;
//   }
//   const avgScore = product_review.rating / product_review.total_reviews;
//   product_review.rating = avgScore.toFixed(1);
//   // generatedData.push(product_review);

//   // do write and drain here
  
//   const write = () => {
//     let goodStatus = file.write(JSON.stringify(product_review) + ',');
//     // console.log(goodStatus);
//     if (goodStatus) {
//       console.log('we cool!');
//     } else {
//       console.log('oh boy, there is a problem');
//       file.once('drain', write);
//       console.log(goodStatus);
//     }
//   }
//   write();
// }


