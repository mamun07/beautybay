import React from 'react';
import { Col, Row } from 'antd';
import NavList from './List';
import { HeaderMenu, HeaderLogo, HeaderNav, HeaderInfo } from './style';
import { AiOutlineCode } from 'react-icons/ai';

const Header = () => {
  return (
    <Row gutter={0} justify="center">
      <Col xs={22} xxl={20}>
        <HeaderNav>
          <HeaderLogo>
            <AiOutlineCode />
          </HeaderLogo>
          <HeaderMenu>
            <NavList datalist={menus} />
          </HeaderMenu>
          <HeaderInfo>
            <NavList datalist={info} />
          </HeaderInfo>
        </HeaderNav>
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
const info = [
  {
    title: '+8801917632421',
    link: 'tel:+8801917632421',
  },
  {
    title: 'mamunben7@gmail.com',
    link: 'mailto:mamunben7@gmail.com',
  },
];
