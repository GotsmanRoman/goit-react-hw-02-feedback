import React from 'react';
import { Message } from './Notification.module';

const Notification = ({ message }) => {
  return <Message>{message}</Message>;
};

export { Notification };
