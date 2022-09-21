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
  margin: 0;
  padding: 0;
  li {
    float: left;
    list-style: none;
    a {
      padding: 15px 20px;
      font-size: 14px;
    }
  }
`;
