import React from 'react';
import { shallow } from 'enzyme';

import Images from '../components/Reviews/Images/Images';

// eslint-disable-next-line no-undef
describe('Images', () => {
  // eslint-disable-next-line no-undef
  it('should render correctly', () => {
    // eslint-disable-next-line react/jsx-filename-extension
    const component = shallow(<Images />);

    // eslint-disable-next-line no-undef
    expect(component).toMatchSnapshot();
  });
});
