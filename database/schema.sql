DROP SCHEMA IF EXISTS schema CASCADE;

CREATE SCHEMA schema;

CREATE TABLE schema.product_info(
  id SERIAL PRIMARY KEY,
  product_name TEXT NOT NULL,
  category TEXT NOT NULL,
  total_reviews INTEGER NOT NULL,
  rating TEXT NOT NULL,
  no_one_star_reviews INTEGER NOT NULL,
  no_two_star_reviews INTEGER NOT NULL,
  no_three_star_reviews INTEGER NOT NULL,
  no_four_star_reviews INTEGER NOT NULL,
  no_five_star_reviews INTEGER NOT NULL
  -- customer_images TEXT []
);

-- CREATE TABLE schema.review_by_feature(
--   feature TEXT NOT NULL,
--   rating TEXT NOT NULL,
--   is_helpful BOOLEAN NOT NULL,
--   product_id INTEGER NOT NULL
-- );

-- CREATE TABLE schema.review_by_interests(
--   interest TEXT NOT NULL,
--   rating TEXT NOT NULL,
--   is_helpful BOOLEAN NOT NULL,
--   product_id INTEGER NOT NULL
-- );

CREATE TABLE schema.review_info(
  id SERIAL PRIMARY KEY,
  review_rating INTEGER NOT NULL,
  review TEXT NOT NULL,
  review_title TEXT NOT NULL,
  reviewer TEXT NOT NULL,
  -- images TEXT [],
  verified_purchase BOOLEAN NOT NULL,
  helpful_counter INTEGER NOT NULL,
  created_at TEXT NOT NULL,
  product_id INTEGER NOT NULL,
  product_name TEXT NOT NULL,
  category TEXT NOT NULL
);

CREATE INDEX product_info_id_index ON schema.product_info(id);
CREATE INDEX product_info_name_index ON schema.product_info(product_name);

CREATE INDEX review_info_id_index ON schema.review_info(id);
CREATE INDEX review_info_productid_index ON schema.review_info(product_id);
CREATE INDEX review_info_name_index ON schema.review_info(product_name);

COPY schema.product_info FROM '/Users/doodoodoom/Desktop/SDCservice_Matt/database/data.csv' DELIMITERS ',' CSV;
COPY schema.review_info FROM '/Users/doodoodoom/Desktop/SDCservice_Matt/database/reviews.csv' DELIMITERS ',' CSV;

SELECT setval('schema.review_info_id_seq', (SELECT MAX(id) FROM schema.review_info)+1);
