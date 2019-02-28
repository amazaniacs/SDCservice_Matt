/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable import/extensions */
import React from 'react';
import styled from 'styled-components';
import Stars from './Stars/Stars.jsx';
import Feature from './Feature/Feature.jsx';
import Interests from './Interests/Interests.jsx';
import Thoughts from './Thoughts/Thoughts.jsx';

const Boxes = styled.div`
  flex-direction: column;
  align-items: stretch;
  justify-content: stretch;
  padding: 10px;
  padding-right: 50px;
`;

class Reviews extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Boxes>
          <Stars />
        </Boxes>
        <Boxes>
          <Feature />
        </Boxes>
        <Boxes>
          <Interests />
        </Boxes>
        <Boxes>
          <Thoughts />
        </Boxes>
      </div>
    );
  }
}

export default Reviews;
