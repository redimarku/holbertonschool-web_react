import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySectionWithMarginBottom/BodySectionWithMarginBottom';

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
    it('renders the Login component inside BodySectionWithMarginBottom', () => {
      const wrapper = shallow(<App isLoggedIn={false} />);
      expect(wrapper.find(Login)).toHaveLength(0); // shallow won't find it inside wrapper
      expect(wrapper.find(BodySectionWithMarginBottom).at(0).prop('title')).toBe('Log in to continue');
      expect(wrapper.find(CourseList)).toHaveLength(0);
    });
  });

  describe('when isLoggedIn is true', () => {
    it('renders the CourseList component inside BodySectionWithMarginBottom', () => {
      const wrapper = shallow(<App isLoggedIn={true} />);
      expect(wrapper.find(CourseList)).toHaveLength(0); // shallow won't find it inside wrapper
      expect(wrapper.find(BodySectionWithMarginBottom).at(0).prop('title')).toBe('Course list');
      expect(wrapper.find(Login)).toHaveLength(0);
    });
  });

  it('displays a BodySection with title "News from the School" and correct paragraph', () => {
    const wrapper = shallow(<App />);
    const bodySection = wrapper.find(BodySection);

    expect(bodySection).toHaveLength(1);
    expect(bodySection.prop('title')).toMatch(/news from the school/i);
    expect(bodySection.prop('children').props.children).toMatch(/holberton school news goes here/i);
  });

  describe('keyboard events', () => {
    let alertMock;
    let wrapper;

    beforeEach(() => {
      alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});
    });

    afterEach(() => {
      alertMock.mockRestore();
      if (wrapper) {
        wrapper.instance().componentWillUnmount();
        wrapper = null;
      }
    });

    it('calls logOut when Ctrl + H is pressed', () => {
      const logOutMock = jest.fn();
      wrapper = shallow(<App logOut={logOutMock} />);

      document.dispatchEvent(
        new KeyboardEvent('keydown', { key: 'h', ctrlKey: true })
      );

      expect(logOutMock).toHaveBeenCalledTimes(1);
    });

    it('calls alert when Ctrl + H is pressed', () => {
      wrapper = shallow(<App />);

      document.dispatchEvent(
        new KeyboardEvent('keydown', { key: 'h', ctrlKey: true })
      );

      expect(alertMock).toHaveBeenCalledWith('Logging you out');
    });
  });
});