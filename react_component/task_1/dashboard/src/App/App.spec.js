import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';

describe('App component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toBeTruthy();
  });

  it('passes notificationsList to Notifications as notifications prop', () => {
    const wrapper = shallow(<App />);
    const notifications = wrapper.find(Notifications);

    expect(notifications.prop('notifications')).toHaveLength(3);
    expect(notifications.prop('notifications')[0]).toEqual({
      id: 1,
      type: 'default',
      value: 'New course available',
    });
    expect(notifications.prop('notifications')[1]).toEqual({
      id: 2,
      type: 'urgent',
      value: 'New resume available',
    });
    expect(notifications.prop('notifications')[2]).toEqual({
      id: 3,
      type: 'urgent',
      html: { __html: 'Urgent requirement - complete by EOD' },
    });
  });

  describe('when isLoggedIn is false', () => {
    it('renders the Login component', () => {
      const wrapper = shallow(<App isLoggedIn={false} />);
      expect(wrapper.find(Login)).toHaveLength(1);
      expect(wrapper.find(CourseList)).toHaveLength(0);
    });
  });

  describe('when isLoggedIn is true', () => {
    it('renders the CourseList component', () => {
      const wrapper = shallow(<App isLoggedIn={true} />);
      expect(wrapper.find(CourseList)).toHaveLength(1);
      expect(wrapper.find(Login)).toHaveLength(0);
    });
  });

  // ✅ NEW TESTS
  describe('keyboard events', () => {
    let alertMock;

    beforeEach(() => {
      alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});
    });

    afterEach(() => {
      alertMock.mockRestore();
    });

    it('calls logOut when Ctrl + H is pressed', () => {
      const logOutMock = jest.fn();
      const wrapper = shallow(<App logOut={logOutMock} />);

      // Manually trigger lifecycle
      wrapper.instance().componentDidMount();

      const event = new KeyboardEvent('keydown', {
        key: 'h',
        ctrlKey: true,
      });

      document.dispatchEvent(event);

      expect(logOutMock).toHaveBeenCalledTimes(1);

      // Cleanup
      wrapper.instance().componentWillUnmount();
    });

    it('calls alert when Ctrl + H is pressed', () => {
      const wrapper = shallow(<App />);

      wrapper.instance().componentDidMount();

      const event = new KeyboardEvent('keydown', {
        key: 'h',
        ctrlKey: true,
      });

      document.dispatchEvent(event);

      expect(alertMock).toHaveBeenCalledWith('Logging you out');

      wrapper.instance().componentWillUnmount();
    });
  });
});