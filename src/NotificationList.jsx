import { useContext } from 'react';
import { NotificationContext } from './NotificationContext.jsx';

function NotificationList() {
  const { notifications, markAllAsRead, stopNotifications } =
    useContext(NotificationContext);

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Notifications</h2>
      <ul>
        {notifications.map((n) => (
          <li
            key={n.id}
            style={{
              fontWeight: n.read ? 'normal' : 'bold',
              background: n.read ? '#f9f9f9' : '#e0f7fa',
              padding: '0.5rem',
              marginBottom: '0.5rem',
              borderRadius: '4px'
            }}
          >
            {n.message}
          </li>
        ))}
      </ul>
      <button onClick={markAllAsRead} style={{ marginRight: '1rem' }}>
        Mark All as Read
      </button>
      <button onClick={stopNotifications}>Stop Notifications</button>
    </div>
  );
}

export default NotificationList;
