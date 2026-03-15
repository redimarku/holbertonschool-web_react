import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('Notifications component', () => {
  const notificationsList = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3, type: 'urgent', html: { __html: 'Urgent requirement - complete by EOD' } },
  ];

  it('renders 3 NotificationItem components', () => {
    const wrapper = shallow(<Notifications notifications={notificationsList} />);
    expect(wrapper.find(NotificationItem)).toHaveLength(3);
  });

  it('renders the correct text', () => {
    const wrapper = shallow(<Notifications notifications={notificationsList} />);
    expect(wrapper.contains(<NotificationItem type="default" value="New course available" />)).toBe(true);
  });
});