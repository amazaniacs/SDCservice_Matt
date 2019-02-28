/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable import/extensions */
import React from 'react';
import Images from './Images/Images.jsx';
import Mention from './Mention/Mention.jsx';
import ReviewList from './ReviewList/ReviewList.jsx';
import WriteReview from './WriteReview/WriteReview.jsx';
import { Left, Boxes } from './Review.style';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Left>
        <Boxes><Images /></Boxes>
        <Boxes><Mention /></Boxes>
        <Boxes><ReviewList /></Boxes>
        <Boxes><WriteReview /></Boxes>
      </Left>
    );
  }
}

export default Reviews;
