import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('NotificationItem component', () => {
  it('renders with default type', () => {
    const wrapper = shallow(<NotificationItem type="default" value="test" />);

    expect(wrapper.prop('data-notification-type')).toEqual('default');
    expect(wrapper.prop('style')).toEqual({ color: 'blue' });
  });

  it('renders with urgent type', () => {
    const wrapper = shallow(<NotificationItem type="urgent" value="test" />);

    expect(wrapper.prop('data-notification-type')).toEqual('urgent');
    expect(wrapper.prop('style')).toEqual({ color: 'red' });
  });
});