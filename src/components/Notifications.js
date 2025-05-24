import React, { useEffect, useState } from 'react';

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/notifications')
      .then((response) => response.json())
      .then((data) => setNotifications(data));
  }, []);

  return (
    <ul>
      {notifications.map((note) => (
        <li key={note.id}>{note.message}</li>
      ))}
    </ul>
  );
};

export default Notifications;
