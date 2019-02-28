/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';

import Thoughts from '../components/Sidebar/Thoughts/Thoughts';

describe('Thoughts', () => {
  it('should render correctly', () => {
    const component = shallow(<Thoughts />);

    expect(component).toMatchSnapshot();
  });
});
