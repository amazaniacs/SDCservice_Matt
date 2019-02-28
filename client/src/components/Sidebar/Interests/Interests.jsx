/* eslint-disable react/button-has-type */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Descriptor, Border, Button, Title, Rating, Starbox, WrapButton } from './Interests.style';

class Interests extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Border>
        <Starbox>
          <Title>By consumer groups & interests</Title>
          <img src="https://s3.amazonaws.com/product-reviews-hr110/Icons/questionmark.png" alt="questionmark" height="20px" />
        </Starbox>
        <Descriptor>
          Headphones
          <Starbox>
            <img src="https://s3.amazonaws.com/product-reviews-hr110/Icons/stars.png" alt="stars" height="25px" />
            <Rating>4.2</Rating>
          </Starbox>
        </Descriptor>

        <Descriptor>
          Customers in New York
          <Starbox>
            <img src="https://s3.amazonaws.com/product-reviews-hr110/Icons/stars.png" alt="stars" height="25px" />
            <Rating>4.7</Rating>
          </Starbox>
        </Descriptor>
        <Descriptor style={{ textDecoration: 'none', color: '#7a7a7a' }}>
          Is this feature helpful?
          <WrapButton>
            <Button>Yes</Button>
            <Button>No</Button>
          </WrapButton>
        </Descriptor>
      </Border>
    );
  }
}

export default Interests;
