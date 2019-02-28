/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';

import ReviewList from '../components/Reviews/ReviewList/ReviewList';

describe('ReviewList', () => {
  it('should render correctly', () => {
    const component = shallow(<ReviewList />);

    expect(component).toMatchSnapshot();
  });
});
