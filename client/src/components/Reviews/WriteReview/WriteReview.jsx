/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Text, Button } from './WriteReview.style';

class WriteReview extends React.Component {
  render() {
    return (
      <div>
        <Text>
          See all 453 reviews
        </Text>

        <Button>
          Write a customer review
        </Button>
      </div>
    );
  }
}

export default WriteReview;
