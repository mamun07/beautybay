import React from 'react';
import { Col, Row } from 'antd';
import Btn from '../../components/Btn';

const Post = () => {
  return (
    <Row gutter={0} justify="center">
      <Col xs={22} xxl={20}>
        <Row gutter={16}>
          <Col span={24}>
            <Btn
              lebel="Back to Home Page"
              link="/"
              notifytype="success"
              notifytext="Welcome to homepage!"
            />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Post;
