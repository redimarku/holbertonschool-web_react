import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('NotificationItem component', () => {
  it('renders default notification with correct color and data attribute', () => {
    const wrapper = shallow(
      <NotificationItem type="default" value="test notification" />
    );
    const li = wrapper.find('li');
    expect(li.prop('data-notification-type')).toBe('default');
    expect(li.prop('style')).toEqual({ color: 'blue' });
  });

  it('renders urgent notification with correct color and data attribute', () => {
    const wrapper = shallow(
      <NotificationItem type="urgent" value="test notification" />
    );
    const li = wrapper.find('li');
    expect(li.prop('data-notification-type')).toBe('urgent');
    expect(li.prop('style')).toEqual({ color: 'red' });
  });

  it('renders value text when html prop is not provided', () => {
    const wrapper = shallow(
      <NotificationItem type="default" value="New course available" />
    );
    expect(wrapper.find('li').text()).toBe('New course available');
    expect(wrapper.find('li').prop('dangerouslySetInnerHTML')).toBeUndefined();
  });

  it('renders using dangerouslySetInnerHTML when html prop is provided', () => {
    const htmlContent = { __html: '<u>Urgent requirement</u>' };
    const wrapper = shallow(
      <NotificationItem type="urgent" html={htmlContent} />
    );
    expect(wrapper.find('li').prop('dangerouslySetInnerHTML')).toEqual(htmlContent);
  });
});