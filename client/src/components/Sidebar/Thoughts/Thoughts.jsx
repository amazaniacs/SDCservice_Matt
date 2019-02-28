/* eslint-disable react/button-has-type */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Border, Button, Title, Borderbox } from './Thoughts.style';

class Thoughts extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Border>
        <Title>Review this product</Title>
        <Borderbox>Share your thoughts with other customers</Borderbox>

        <Button>
          <a href="#top" style={{ textDecoration: 'none', color: 'black' }}>Write a customer review</a>
        </Button>
      </Border>
    );
  }
}

export default Thoughts;
