/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';

import Interests from '../components/Sidebar/Interests/Interests';

describe('Interests', () => {
  it('should render correctly', () => {
    const component = shallow(<Interests />);

    expect(component).toMatchSnapshot();
  });
});
