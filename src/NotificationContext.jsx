import React, { createContext, useState, useEffect, useRef } from 'react';

export const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);
  const intervalRef = useRef(null);

  const addNotification = (message) => {
    setNotifications((prev) => [
      ...prev,
      { id: Date.now(), message, read: false }
    ]);
  };

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  const stopNotifications = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      addNotification('You have a new message');
    }, 5000);

    return () => stopNotifications();
  }, []);

  return (
    <NotificationContext.Provider
      value={{ notifications, addNotification, markAllAsRead, stopNotifications }}
    >
      {children}
    </NotificationContext.Provider>
  );
};
