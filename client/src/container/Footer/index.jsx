import { Col, Row } from 'antd';
import React from 'react';

const Footer = () => {
  return (
    <Row gutter={0} justify="center">
      <Col xs={22} xxl={20}>
        <Row gutter={16}>
          <Col span={24}>Footer</Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Footer;
