/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';

import Mention from '../components/Reviews/Mention/Mention';

describe('Mention', () => {
  it('should render correctly', () => {
    const component = shallow(<Mention />);

    expect(component).toMatchSnapshot();
  });
});
