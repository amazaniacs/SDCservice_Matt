/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';

import Stars from '../components/Sidebar/Stars/Stars';

describe('Stars', () => {
  it('should render correctly', () => {
    const component = shallow(<Stars />);

    expect(component).toMatchSnapshot();
  });
});
