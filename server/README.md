# CRUD API SETUP

The following sections describe how each API call works, providing the endpoints and examples of  
what is sent/received on success and failure.

### CREATE

```
POST /api/productreview/
```

A create action from the above endpoint will POST new product review information into the dataset.

#### EXAMPLE OF DATA TO SUBMIT
```javascript
{
  id: 2,
  product_name: 'Destructive Paper Towels',
  rating: 4.4,
  total_reviews: 122,
  no_one_start_reviews: 0,
  no_two_start_reviews: 0,
  no_three_start_reviews: 0,
  no_four_start_reviews: 0,
  no_five_start_reviews: 0,
  customer _images: [
    'some url'
  ],
  reviews_by_feature: [
    {
      feature: 'absorbant',
      rating: 4.1
    }
  ],
  reviews_by_interests: [
    {
      interest: 'mothers',
      rating: 4.5,
      is_helpful: true
    }
  ],
  review_info: {}
}
```


### READ

```
GET /api/productreview/:id
```

A read action from the above endpoint will GET review information for a specific product from the dataset.

#### EXAMPLE OF DATA THAT WILL BE RETRIEVED

```javascript
{
  id: 1,
  product_name: 'Headphones of Glory',
  rating: 4.7,
  total_reviews: 247,
  no_one_start_reviews: 0,
  no_two_start_reviews: 0,
  no_three_start_reviews: 0,
  no_four_start_reviews: 0,
  no_five_start_reviews: 0,
  customer _images: [
    'some url'
  ],
  reviews_by_feature: [
    {
      feature: 'noise-cancelling',
      rating: 4.4
    }
  ],
  reviews_by_interests: [
    {
      interest: 'humans in New York',
      rating: 4.9,
      is_helpful: true
    }
  ],
  review_info: {
    1: {
      images: [
        'some url'
      ],
      product_name: 'Headphones of Glory',
      category: 'tech',
      review_rating: 5,
      review: 'This product is good. Yes, it did what it said it would do.',
      review_title: 'This Changed My Life',
      reviewer: 'Matt Madrid',
      verified_purchase: true,
      helpful_counter: 193,
      created_at: 'Mon Feb 25 2019'
    }
  }
}
```


### UPDATE

```
PUT /api/productreview/:id
```

An update action from the above enpoint will PUT an additional review into the review_info object   
for a specific product id.

#### EXAMPLE OF DATA TO SUBMIT

```javascript
{
  images: [
    'some url'
  ],
  product_name: 'Headphones of Glory',
  category: 'tech',
  review_rating: 1,
  review: 'This product is bad. No, it did not do what it said it would do.',
  review_title: 'This Ruined My Life',
  reviewer: 'Pat Pertrude',
  verified_purchase: true,
  helpful_counter: 193,
  created_at: 'Wed Feb 27 2019'
}
```
______________________________________

```
PUT /api/productreview/:id/update/:id
```

An update action from the above enpoint will use PUT to change information within a specific review  
for a specific product.

#### EXAMPLE OF DATA TO SUBMIT (****** CHANGED VALUE ******)

```javascript
{
  images: [
    'some url'
  ],
  product_name: 'Headphones of Glory',
  category: 'tech',
  review_rating: 1,
  review: **'This product is bad. No, it did not do what it said it would do. It destroyed my crops.'**,
  review_title: 'This Ruined My Life',
  reviewer: 'Pat Pertrude',
  verified_purchase: true,
  helpful_counter: **122**,
  created_at: 'Wed Feb 27 2019'
}
```

_____________________________________

```
PUT /api/productreview/:id/remove/:id
```

An update action from the above enpoint will use PUT to remove a specific review from a specific  
product.

#### EXAMPLE OF DATA TO SUBMIT

```
N/A
```

### DELETE

```
DELETE /api/productreview/:id
```

A delete action from the above endpoint will DELETE a product from the dataset.

#### EXAMPLE OF DATA TO SUBMIT

```javascript
{
  id: 2,
  product_name: 'Destructive Paper Towels'
}
```