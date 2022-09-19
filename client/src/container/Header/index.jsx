import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row } from 'antd';

const Header = () => {
  return (
    <Row gutter={0} justify="center">
      <Col span={22}>
        <Row gutter={16}>
          <Col xs={12} md={6}>
            Logo
          </Col>
          <Col xs={12} md={12}>
            <ul>
              <Link to="/">Home</Link>
              <Link to="/about-me">About Me</Link>
              <Link to="/contact-me">Contac Me</Link>
            </ul>
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
