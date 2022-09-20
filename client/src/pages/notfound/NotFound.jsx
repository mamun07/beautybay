import React from 'react';
import { Col, Row } from 'antd';

const NotFound = () => {
  return (
    <Row gutter={0} justify="center">
      <Col xs={22} xxl={20}>
        <Row gutter={16}>
          <Col span={24}>
            <h1>
              Oops! Nothing Found <span>404</span>
            </h1>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default NotFound;
