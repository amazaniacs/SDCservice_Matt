/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable import/extensions */
import React from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar/Sidebar.jsx';
import Reviews from './Reviews/Reviews.jsx';

const LeftRight = styled.div`
display: flex;
flex-direction: row;
align-items: stretch;
justify-content: flex-start;
font-family: 'Lato', sans-serif;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <LeftRight>
        <Sidebar />
        <Reviews />
      </LeftRight>
    );
  }
}

export default App;
