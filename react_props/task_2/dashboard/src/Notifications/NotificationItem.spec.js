import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('NotificationItem component', () => {
  it('renders correctly with type default', () => {
    const wrapper = shallow(
      <NotificationItem type="default" value="test notification" />
    );
    const li = wrapper.find('li');
    expect(li.prop('data-notification-type')).toBe('default');
    expect(li.prop('style')).toEqual({ color: 'blue' });
  });

  it('renders correctly with type urgent', () => {
    const wrapper = shallow(
      <NotificationItem type="urgent" value="test notification" />
    );
    const li = wrapper.find('li');
    expect(li.prop('data-notification-type')).toBe('urgent');
    expect(li.prop('style')).toEqual({ color: 'red' });
  });
});