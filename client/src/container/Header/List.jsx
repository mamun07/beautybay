import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const List = ({ datalist }) => {
  return (
    <NavBar>
      {datalist?.map((item, i) => {
        return (
          <li key={i}>
            <Link to={item.link}>{item.title}</Link>
          </li>
        );
      })}
    </NavBar>
  );
};

export default List;

const NavBar = styled.ul`
  margin: var(--space0);
  padding: var(--space0);
  li {
    float: left;
    list-style: none;
    a {
      padding: var(--space0) var(--space15);
      font-size: var(--font14);
      line-height: var(--space25);
      display: inline-block;
    }
  }
`;
