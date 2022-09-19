import React from 'react';
import { Link } from 'react-router-dom';

const List = ({ datalist }) => {
  return (
    <ul>
      {datalist?.map((item, i) => {
        return (
          <li key={i}>
            <Link to={item.link}>{item.title}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default List;
