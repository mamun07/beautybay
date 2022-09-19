import React from 'react';
import { Col, Row } from 'antd';
import NavList from './List';
import { NavBar } from './style';

const Header = () => {
  return (
    <Row gutter={0} justify="center">
      <Col span={22}>
        <Row gutter={16}>
          <Col xs={4} md={6}>
            Logo
          </Col>
          <Col xs={20} md={12}>
            <NavBar>
              <NavList datalist={menus} />
            </NavBar>
          </Col>
          <Col xs={12} md={6}>
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
];
