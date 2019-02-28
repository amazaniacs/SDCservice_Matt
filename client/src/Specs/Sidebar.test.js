import React from 'react';
import { shallow } from 'enzyme';

import Sidebar from '../components/Sidebar/Sidebar';

describe('Sidebar', () => {
  it('should render correctly', () => {
    
    const component = shallow(<Sidebar/>);

    expect(component).toMatchSnapshot();
  });
});
