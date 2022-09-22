import React, { useState } from 'react';
import { Col, Drawer, Row } from 'antd';
import NavList from './List';
import { MenuOutlined, AppstoreAddOutlined } from '@ant-design/icons';

import { HeaderMenu, HeaderLogo, HeaderNav, MobileMenu } from './style';

const Header = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <Row gutter={0} justify="center">
      <Col xs={22} xxl={20}>
        <HeaderNav>
          <HeaderLogo>
            <AppstoreAddOutlined />
          </HeaderLogo>
          <HeaderMenu>
            <NavList datalist={menus} />
            <MobileMenu>
              <MenuOutlined onClick={showDrawer} />
              <Drawer placement="right" onClose={onClose} open={open}>
                <NavList datalist={menus} />
              </Drawer>
            </MobileMenu>
          </HeaderMenu>
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
