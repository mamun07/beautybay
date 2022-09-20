import React from 'react';
import { Col, Row } from 'antd';
import NavList from './List';
import { NavBar } from './style';
import { AiOutlineCode } from 'react-icons/ai';

const Header = () => {
  return (
    <Row gutter={0} justify="center">
      <Col xs={22} xxl={20}>
        <Row gutter={16}>
          <Col xs={12} md={20}>
            <div>
              <AiOutlineCode />
            </div>
            <NavBar>
              <NavList datalist={menus} />
            </NavBar>
          </Col>
          <Col xs={12} md={4}>
            Social
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Header;

const menus = [
  {
    title: 'Home',
    link: '/',
  },
  {
    title: 'About',
    link: '/about-me',
  },
  {
    title: 'Contact',
    link: '/contact-me',
  },
  {
    title: 'Post',
    link: '/post',
  },
];
