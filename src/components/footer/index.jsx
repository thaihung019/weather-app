import React from 'react';
import { Layout, Row, Col, Typography, Form, Input, Button } from 'antd';

const {Footer} = Layout;
const {Title} = Typography;

export default () => {
  return (
    <Footer className="traversal-footer">
      <Row type="flex" justify="space-between">
        <Col span={6}>
          <Title level={2}>TRAVERSAL</Title>
          <p>FAQs</p>
          <p>Sign Up</p>
          <p>Log In</p>
        </Col>
        <Col span={10} className="subscribe-letter">
          <Form.Item label="Subscribe to Our Newsletter">
            <Input size="large" />
            <Button type="primary" size="large">Subscribe</Button>
          </Form.Item>
        </Col>
      </Row>
      <Row type="flex" justify="center">
        <p style={{margin: 0}}>Copyright &#9400; 2018 Traversal LLC. All Rights Reserved</p>
      </Row>
    </Footer>
  )
}
