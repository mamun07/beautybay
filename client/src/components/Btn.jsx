import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Btn = ({ lebel, link, notifytext, notifytype }) => {
  const CustomNotify = () =>
    toast.success(`${notifytext}`, { theme: 'colored' });

  return (
    <Link onClick={CustomNotify} to={link}>
      {lebel}
    </Link>
  );
};

export default Btn;
