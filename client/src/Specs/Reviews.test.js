import React from 'react';
import { shallow } from 'enzyme';

import Reviews from '../components/Reviews/Reviews';

describe('Reviews', () => {
  it('should render correctly', () => {
    
    const component = shallow(<Reviews/>);

    expect(component).toMatchSnapshot();
  });
});
