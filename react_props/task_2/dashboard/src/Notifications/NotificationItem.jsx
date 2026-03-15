import React from 'react';
import PropTypes from 'prop-types';

function NotificationItem({ type = 'default', value = '', html = null }) {
  const color = type === 'urgent' ? 'red' : 'blue';

  // Always render the <li> with data-notification-type and style
  return (
    <li data-notification-type={type} style={{ color }}>
      {html ? <span dangerouslySetInnerHTML={{ __html: html.__html }} /> : value}
    </li>
  );
}

NotificationItem.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  html: PropTypes.shape({ __html: PropTypes.string }),
};

export default NotificationItem;