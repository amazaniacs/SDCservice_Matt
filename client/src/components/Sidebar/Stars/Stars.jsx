/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Links, Descriptor, Number, Bars, Yellow, Rating, Starbox, Tooltiptext, Tooltip } from './Stars.style';

class Stars extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Descriptor>
        <Number>453 customer reviews</Number>
        <div />
        <Starbox>
          <img src="https://s3.amazonaws.com/product-reviews-hr110/Icons/stars.png" alt="stars" height="25px" />
          {'   '}
          <Tooltip>
            4.2 out of 5 stars
            <img src="https://s3.amazonaws.com/product-reviews-hr110/Icons/downarrow.png" alt="down" height="10px" />
            <Tooltiptext>
            Amazon calculates a product’s star ratings based on a
            machine learned model instead of a raw data average. The
            model takes into account factors including the age of a rating,
            whether the ratings are from verified purchasers, and factors that
            establish reviewer trustworthiness.
            </Tooltiptext>
          </Tooltip>
        </Starbox>

        <div>
          <Links href="#top">
          5 star
            {'    '}
            <Bars>
              <Yellow></Yellow>
            </Bars>
          </Links>
          <Rating>20%</Rating>
        </div>
        <div>
          <Links href="#top">
          4 star
            {'    '}
            <Bars>
              <Yellow></Yellow>
            </Bars>          
          </Links>
          <Rating>20%</Rating>
        </div>
        <div>
          <Links href="#top">
          3 star
            {'    '}
            <Bars>
              <Yellow></Yellow>  
            </Bars>          
          </Links>
          <Rating>20%</Rating>
        </div>
        <div>
          <Links href="#top">
          2 star
            {'    '}
            <Bars>
              <Yellow></Yellow>  
            </Bars>          
          </Links>
          <Rating>20%</Rating>
        </div>
        <div>
          <Links href="#top">
          1 star
            {'    '}
            <Bars>
              <Yellow></Yellow>
            </Bars>
          </Links>
          <Rating>20%</Rating>
        </div>
      </Descriptor>
    );
  }
}

export default Stars;
