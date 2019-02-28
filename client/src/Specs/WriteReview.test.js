/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';

import WriteReview from '../components/Reviews/WriteReview/WriteReview';

describe('WriteReview', () => {
  it('should render correctly', () => {
    const component = shallow(<WriteReview />);

    expect(component).toMatchSnapshot();
  });
});
