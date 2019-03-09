// /* eslint-disable no-console */
// /* eslint-disable camelcase */
// // MONGODB
// const mongoose = require('mongoose');
// const fs = require('fs');

// require('dotenv').config({ path: '../.env' });

// mongoose.connect('mongodb://localhost/products', { useNewUrlParser: true });
// const db = mongoose.connection;

// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', () => {
//   console.log('Connection is open');
// });

// // eslint-disable-next-line prefer-destructuring
// const Schema = mongoose.Schema;

// const reviewsByFeatureSchema = new Schema({
//   feature: String,
//   rating: String,
//   is_helpful: Boolean,
// });

// const reviewsByInterestsSchema = new Schema({
//   interest: String,
//   rating: String,
//   is_helpful: Boolean,
// });

// const singleReviewSchema = new Schema({
//   product_id: Number,
//   product_name: String,
//   product_category: String,
//   review_rating: Number,
//   review: String,
//   review_title: String,
//   reviewer: String,
//   images: [String],
//   verified_purchase: Boolean,
//   helpful_counter: Number,
//   created_at: String,
// });
// const reviewSchema = new Schema({
//   id: { type: Number, index: true },
//   product_name: { type: String, index: true },
//   category: { type: String, index: true },
//   rating: String,
//   no_one_star_reviews: Number,
//   no_two_star_reviews: Number,
//   no_three_star_reviews: Number,
//   no_four_star_reviews: Number,
//   no_five_star_reviews: Number,
//   customer_images: [String],
//   reviews_by_feature: [reviewsByFeatureSchema],
//   reviews_by_interests: [reviewsByInterestsSchema],
//   review_info: [singleReviewSchema],
// });

// const Review = mongoose.model('Review', reviewSchema);

// // Review.deleteMany({}, () => {
// //   console.log('Database running');
// //   console.log(Date.now());
// // });

// console.log(Date.now());

// const file = fs.createReadStream(`${__dirname}/data.txt`);
// let buffer = '';
// const dataChunk = [];

// const insertData = (data) => {
//   // console.log('INSERTDATA HAS BEEN ACTIVATED!!');
//   const line = data.slice();
//   // if (line[line.length - 1] === '\r') {
//   //   line = line.substr(0, line.length - 1);
//   // }

//   // if (line.length > 0) {
//   const obj = JSON.parse(line);
//   // Review.insertMany(obj, (err) => {
//   //   if (err) {
//   //     console.log(`ERROR ON SEED; ${err}`);
//   //   }
//   // });
//   dataChunk.push(obj);
//   if (dataChunk.length === 10000) {
//     Review.insertMany(dataChunk, (err) => {
//       if (err) {
//         console.log(`ERROR ON SEED; ${err}`);
//       }
//       dataChunk.splice(0, 10000);
//     });
//   }
// };

// const handleBuffer = () => {
//   // console.log('HANDLEBUFFER HAS BEEN ACTIVATED!!');
//   let position;
//   while ((position = buffer.indexOf('\n')) >= 0) {
//     if (position === 0) {
//       buffer = buffer.slice(1);
//     }
//     insertData(buffer.slice(0, position));
//     buffer = buffer.slice(position + 1);
//   }
// };

// file.on('data', (chunk) => {
//   // console.log('DATA');
//   // console.log(chunk);
//   buffer += chunk.toString();
//   handleBuffer();
// });
// file.on('readable', () => {
//   console.log('READABLE');
//   console.log(file.read());
//   console.log(file.readable);
// });
// file.on('end', () => {
//   console.log('END');
//   console.log(Date.now());
// });


// function grabProduct(productid, productname, callback) {
//   if (productid && productname) {
//     Review.find({ id: productid, product_name: productname }, (err, num) => {
//       if (err) {
//         callback(err);
//       }
//       callback(null, num);
//     }).limit(1);
//   } else if (productid) {
//     Review.find({ id: productid }, (err, num) => {
//       if (err) {
//         callback(err);
//       }
//       callback(null, num);
//     }).limit(1);
//   } else if (productname) {
//     Review.find({ product_name: productname }, (err, num) => {
//       if (err) {
//         callback(err);
//       }
//       callback(null, num);
//     }).limit(1);
//   }
// }

// module.exports.grabProduct = grabProduct;


// POSTGRESQL
const { Client } = require('pg');
const fs = require('fs');
require('dotenv').config({ path: '../.env' });

const client = new Client({
  database: 'postgres'
});

client.connect();

// client.query(`COPY schema.product_info FROM '/Users/doodoodoom/Desktop/SDCservice_Matt/database/data.csv' DELIMITERS ',' CSV;`, (err, res) => {
//   if (err) {
//     console.log(`FAIL; ${err}`);
//   } else {
//     console.log(`SUCCESS; ${res}`);
//   }
// });

// client.query(`COPY schema.review_info FROM '/Users/doodoodoom/Desktop/SDCservice_Matt/database/reviews.csv' DELIMITERS ',' CSV;`, (err, res) => {
//   if (err) {
//     console.log(`FAIL; ${err}`);
//   } else {
//     console.log(`SUCCESS; ${res}`);
//   }
// });

function grabProduct(productid, productname, callback) {
  if (productid !== null && productname !== null) {
    client.query(`SELECT * FROM schema.product_info p, schema.review_info r 
    WHERE p.id = r.product_id AND p.id = ${productid}
    AND p.product_name = r.product_name AND p.product_name = '${productname}'`, (err, res) => {
      if (err) {
        callback(err);
      }
      callback(null, res.rows);
    });
  } else if (productid !== null) {
    client.query(`SELECT * FROM schema.product_info p, schema.review_info r 
    WHERE p.id = r.product_id AND p.id = ${productid}`, (err, res) => {
      if (err) {
        callback(err);
      }
      callback(null, res.rows);
    });
  } else if (productname !== null) {
    client.query(`SELECT * FROM schema.product_info p, schema.review_info r 
    WHERE p.product_name = r.product_name AND p.product_name = '${productname}'`, (err, res) => {
      if (err) {
        callback(err);
      }
      callback(null, res.rows);
    });
  }
}

function postProduct(productobj, callback) {
  client.query(`INSERT INTO schema.product_info(product_name, category, total_reviews, rating,
    no_one_star_reviews, no_two_star_reviews, no_three_star_reviews, no_four_star_reviews, 
    no_five_star_reviews) VALUES ('${productobj.product_name}', '${productobj.category}', 
    ${productobj.total_reviews}, '${productobj.rating}', ${productobj.no_one_star_reviews}, 
    ${productobj.no_two_star_reviews}, ${productobj.no_three_star_reviews}, ${productobj.no_four_star_reviews}, 
    ${productobj.no_five_star_reviews})`, (err) => {
    if (err) {
      callback(err);
    }
    callback(null);
  });
}

function postReview(id, reviewobj, callback) {
  client.query(`INSERT INTO schema.review_info(review_rating, review, review_title, reviewer,
    verified_purchase, helpful_counter, created_at, product_id, product_name, 
    category) VALUES (${reviewobj.review_rating}, '${reviewobj.review}', 
    '${reviewobj.review_title}', '${reviewobj.reviewer}', ${reviewobj.verified_purchase}, 
    ${reviewobj.helpful_counter}, '${reviewobj.created_at}', ${id}, 
    (SELECT product_name FROM schema.product_info WHERE id = ${id}), 
    (SELECT category FROM schema.product_info WHERE id = ${id}))`, (err) => {
    if (err) {
      console.log(`BAD POST!! ${err} ${JSON.stringify(id)}`);
      callback(err);
    }
    callback(null);
  });
}

function editReview(id, reviewobj, callback) {
  client.query(`UPDATE schema.review_info SET review_rating = '${reviewobj.review_rating}',
    review = '${reviewobj.review}', review_title = '${reviewobj.review_title}', 
    reviewer = '${reviewobj.reviewer}' WHERE id = ${id}`, (err) => {
    if (err) {
      callback(err);
    }
    callback(null);
  });
}

function deleteProduct(productid, callback) {
  client.query(`DELETE FROM schema.product_info p WHERE p.id = ${productid}`, (err) => {
    if (err) {
      callback(err);
    }
    callback(null);
  });
}

function deleteReviews(productid, callback) {
  client.query(`DELETE FROM schema.review_info r WHERE r.product_id = ${productid}`, (err) => {
    if (err) {
      callback(err);
    }
    callback(null);
  });
}

function deleteReview(reviewid, callback) {
  client.query(`DELETE FROM schema.review_info r WHERE r.id = ${reviewid}`, (err) => {
    if (err) {
      callback(err);
    }
    callback(null);
  });
}

module.exports.grabProduct = grabProduct;
module.exports.deleteProduct = deleteProduct;
module.exports.deleteReviews = deleteReviews;
module.exports.deleteReview = deleteReview;
module.exports.postProduct = postProduct;
module.exports.postReview = postReview;
module.exports.editReview = editReview;


// const file = fs.createReadStream(`${__dirname}/data.txt`);
// let buffer = '';
// console.log(Date.now());
// // const dataChunk = [];

// const insertData = (data) => {
//   const line = data.slice();
//   const obj = JSON.parse(line);
//   const productQuery = `INSERT INTO schema.product_info(id, product_name, category,
//     rating, total_reviews, no_one_star_reviews, no_two_star_reviews, no_three_star_reviews,
//     no_four_star_reviews, no_five_star_reviews) VALUES
//     (${obj.id}, '${obj.product_name}', '${obj.category}', '${obj.rating}', ${obj.total_reviews},
//      ${obj.no_one_star_reviews}, ${obj.no_two_star_reviews}, ${obj.no_three_star_reviews},
//      ${obj.no_four_star_reviews}, ${obj.no_five_star_reviews});`;

//   client.query(productQuery, (err, res) => {
//     if (err) {
//       console.log(`ERROR ON INSERT; ${err}`);
//       console.log(productQuery);
//     }
//   });

//   for (let i = 0; i < obj.reviews_by_feature.length; i += 1) {
//     const reviewByFeatureQuery = `INSERT INTO schema.review_by_feature(feature, rating, 
//       is_helpful, product_id) VALUES 
//       ('${obj.reviews_by_feature[i].feature}', '${obj.reviews_by_feature[i].rating}',
//       ${obj.reviews_by_feature[i].is_helpful}, ${obj.reviews_by_feature[i].product_id});`;

//     client.query(reviewByFeatureQuery, (err, res) => {
//       if (err) {
//         console.log(`ERROR ON INSERT; ${err}`);
//         console.log(reviewByFeatureQuery);
//       }
//     });
//   }

//   for (let i = 0; i < obj.reviews_by_interests.length; i += 1) {
//     const reviewByInterestsQuery = `INSERT INTO schema.review_by_interests(interest, rating, 
//       is_helpful, product_id) VALUES 
//       ('${obj.reviews_by_interests[i].interest}', '${obj.reviews_by_interests[i].rating}',
//       ${obj.reviews_by_interests[i].is_helpful}, ${obj.reviews_by_interests[i].product_id});`;

//     client.query(reviewByInterestsQuery, (err, res) => {
//       if (err) {
//         console.log(`ERROR ON INSERT; ${err}`);
//         console.log(reviewByInterestsQuery);
//       }
//     });
//   }

//   for (let i = 0; i < obj.review_info.length; i += 1) {
//     const reviewQuery= `INSERT INTO schema.review_info(review_rating, review, review_title, 
//       reviewer, verified_purchase, helpful_counter, created_at, product_id, 
//       product_name, category) VALUES 
//       (${obj.review_info[i].review_rating}, '${obj.review_info[i].review}', 
//       '${obj.review_info[i].review_title}', '${obj.review_info[i].reviewer}', 
//       ${obj.review_info[i].verified_purchase}, ${obj.review_info[i].helpful_counter}, 
//       '${obj.review_info[i].created_at}', ${obj.review_info[i].product_id}, 
//       '${obj.review_info[i].product_name}', '${obj.review_info[i].category}');`;
//     client.query(reviewQuery, (err, res) => {
//       if (err) {
//         console.log(`ERROR ON INSERT; ${err}`);
//         console.log(reviewQuery);
//       }
//     });
//   }
// };

// const handleBuffer = () => {
//   let position;
//   while ((position = buffer.indexOf('\n')) >= 0) {
//     if (position === 0) {
//       buffer = buffer.slice(1);
//     }
//     insertData(buffer.slice(0, position));
//     buffer = buffer.slice(position + 1);
//   }
// };

// file.on('data', (chunk) => {
//   buffer += chunk.toString();
//   handleBuffer();
// });

// file.on('end', () => {
//   console.log('END');
//   console.log(Date.now());
// });
//