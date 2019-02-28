/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';

import Feature from '../components/Sidebar/Feature/Feature';

describe('Feature', () => {
  it('should render correctly', () => {
    const component = shallow(<Feature />);

    expect(component).toMatchSnapshot();
  });
});
