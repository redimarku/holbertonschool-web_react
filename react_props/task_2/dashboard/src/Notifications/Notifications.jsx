import React from 'react';
import PropTypes from 'prop-types';
import NotificationItem from './NotificationItem';
import './Notifications.css'

function Notifications({ notifications = [] }) {
  return (
    <div className="notification-items">
      <p>Here is the list of notifications</p>
      <ul>
        {notifications.map((notif) => (
          <NotificationItem
            key={notif.id}
            type={notif.type}
            value={notif.value}
            html={notif.html}
          />
        ))}
      </ul>
    </div>
  );
}

Notifications.propTypes = {
  notifications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      type: PropTypes.string,
      value: PropTypes.string,
      html: PropTypes.shape({
        __html: PropTypes.string,
      }),
    })
  ),
};

export default Notifications;