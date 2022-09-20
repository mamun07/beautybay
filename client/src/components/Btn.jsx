import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Btn = ({ lebel, link, notifytext, notifytype }) => {
  const CustomNotify = () => {
    if (notifytype === 'success') {
      toast.success(`${notifytext}`, { theme: 'colored' });
    } else if (notifytype === 'info') {
      toast.info(`${notifytext}`, { theme: 'colored' });
    } else if (notifytype === 'error') {
      toast.error(`${notifytext}`, { theme: 'colored' });
    } else if (notifytype === 'warn') {
      toast.warn(`${notifytext}`, { theme: 'colored' });
    } else {
      toast(`${notifytext}`, { theme: 'colored' });
    }
  };

  return (
    <Link onClick={CustomNotify} to={link}>
      {lebel}
    </Link>
  );
};

export default Btn;
