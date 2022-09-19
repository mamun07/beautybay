import React from 'react';
import { Col, Row } from 'antd';

const HomePage = () => {
  return (
    <Row gutter={0} justify="center">
      <Col span={22}>
        <Row gutter={16}>
          <Col span={24}>
            <h1>Welcome to Beauty Bay</h1>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default HomePage;
