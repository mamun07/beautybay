import React from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
    <CusButton onClick={CustomNotify} to={link}>
      {lebel}
    </CusButton>
  );
};

export default Btn;

const CusButton = styled(Link)`
  padding: 15px 30px;
  background: var(--orange-color);
  border: 1px solid var(--orange-color);
  color: var(--secondary-color);
  display: inline-block;
  transition: 0.3s;
  text-transform: uppercase;
  &:hover {
    background: transparent;
    color: var(--orange-color);
    border: 1px solid var(--orange-color);
  }
`;
