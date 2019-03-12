/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/button-has-type */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Button, Select, Reviews, Title, Starbox, Space } from './ReviewList.style';

const axios = require('axios');

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewers: [],
      reviewTitle: [],
      review: [],
      helpful: [],
      datePosted: [],
      done: false,
    };
  }

  componentDidMount() {
    const fullUrl = document.URL;
    const urlArray = fullUrl.split('/');
    const lastSegment = urlArray[urlArray.length - 1];
    axios.get(`http://localhost:3008/api/productreview/${lastSegment}`)
      .then((res) => {
        for (let i = 0; i < res.data.length; i += 1) {
          this.state.reviewers.push(res.data[i].reviewer);
          this.state.reviewTitle.push(res.data[i].review_title);
          this.state.review.push(res.data[i].review);
          this.state.helpful.push(res.data[i].helpful_counter);
          this.state.datePosted.push(res.data[i].created_at);
        }
        this.setState({ done: true });
      });
  }

  render() {
    const { reviewers, reviewTitle, review , helpful, datePosted } = this.state;
    return (
      <div>
        <Title>Showing 1-3 of 453 reviews</Title>
        <div>
          <Select name="reviews">
            <option value="Top Reviews">Top Reviews</option>
            <option value="Most recent">Most recent</option>
          </Select>
        </div>

        <Reviews>
          <div>
            <Starbox>
              <img
                src="https://s3.amazonaws.com/product-reviews-hr110/Icons/avatar.png"
                height="30px"
                width="30px"
                alt="avatar"
                max-width="100%"
                display="block"
              />
              {reviewers[0]}
            </Starbox>
            <Starbox>
              <img src="https://s3.amazonaws.com/product-reviews-hr110/Icons/stars.png" alt="stars" height="25px" />
              <Title> {reviewTitle[0]} </Title>
            </Starbox>
            <div> {datePosted[0]} </div>
            <p width="auto">
              { review[0] }
            </p>
            <div>
              {helpful[0]} people found this helpful
            </div>
            <Space>
              <Button>Helpful</Button> |
              <a href="#top" style={{ textDecoration: 'none', color: '#7a7a7a' }}>Comment</a> |
              <a href="#top" style={{ textDecoration: 'none', color: '#7a7a7a' }}>Report abuse</a>
            </Space>
          </div>
        </Reviews>

        <Reviews>
          <Starbox>
            <img src="https://s3.amazonaws.com/product-reviews-hr110/Icons/avatar.png" height="30px" width="30px" alt="avatar" />
            {reviewers[1]}
          </Starbox>
          <Starbox>
            <img src="https://s3.amazonaws.com/product-reviews-hr110/Icons/stars.png" alt="stars" height="25px" />
            <Title> {reviewTitle[1]} </Title>
          </Starbox>
          <div> {datePosted[1]} </div>
          <p width="auto">
            { review[1] }
          </p>
          <div>
            {helpful[1]} people found this helpful
          </div>
          <Space>
            <Button>Helpful</Button> |
            <a href="#top" style={{ textDecoration: 'none', color: '#7a7a7a' }}>Comment</a> |
            <a href="#top" style={{ textDecoration: 'none', color: '#7a7a7a' }}>Report abuse</a>
          </Space>
        </Reviews>

        <Reviews>
          <Starbox>
            <img src="https://s3.amazonaws.com/product-reviews-hr110/Icons/avatar.png" height="30px" width="30px" alt="avatar" />
            {reviewers[2]}
          </Starbox>
          <Starbox>
            <img src="https://s3.amazonaws.com/product-reviews-hr110/Icons/stars.png" alt="stars" height="25px" />
            <Title> {reviewTitle[2]} </Title>
          </Starbox>
          <div> {datePosted[2]} </div>
          <p width="auto">
            { review[2] }
          </p>
          <div>
            {helpful[2]} people found this helpful
          </div>
          <Space>
            <Button>Helpful</Button> |
            <a href="#top" style={{ textDecoration: 'none', color: '#7a7a7a' }}>Comment</a> |
            <a href="#top" style={{ textDecoration: 'none', color: '#7a7a7a' }}>Report abuse</a>          
          </Space>
        </Reviews>
      </div>
    );
  }
}

export default ReviewList;
