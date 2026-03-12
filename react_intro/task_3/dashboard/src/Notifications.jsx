import './Notifications.css';
import closeButton from './assets/close-button.png';
import { getLatestNotification } from './utils';

const Notifications = () => {
  const handleClick = () => {
    console.log("Close button has been clicked");
  };

  return (
    <div className="notification-items">
      <button
        style={{ float: "right" }}
        aria-label="close"
        onClick={handleClick}
      >
        <img
          src={closeButton}
          style={{ width: "13px", height: "10px" }}
          alt=""
        />
      </button>

      <p>Here is the list of notifications</p>

      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li dangerouslySetInnerHTML={{ __html: getLatestNotification() }} />
      </ul>
    </div>
  );
};

export default Notifications;