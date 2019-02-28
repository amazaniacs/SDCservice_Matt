/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Descriptor, Border, Title, Rating, Keep } from './Feature.style';

class Feature extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Border>
        <Title>By feature</Title>
        <Descriptor>
          Sound quality
          <Keep>
            <img src="https://s3.amazonaws.com/product-reviews-hr110/Icons/stars.png" alt="stars" height="25px" />
            <Rating>4.4</Rating>
          </Keep>
        </Descriptor>
        <Descriptor>
          Battery life
          <Keep>
            <img src="https://s3.amazonaws.com/product-reviews-hr110/Icons/stars.png" alt="stars" height="25px" />
            <Rating>4.1</Rating>
          </Keep>
        </Descriptor>
        <Descriptor>
          Noise cancellation
          <Keep>
            <img src="https://s3.amazonaws.com/product-reviews-hr110/Icons/stars.png" alt="stars" height="25px" />
            <Rating>4.1</Rating>
          </Keep>
        </Descriptor>
      </Border>
    );
  }
}

export default Feature;
