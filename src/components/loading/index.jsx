import React from 'react';
import { Row, Spin } from 'antd';

export default ({size = 'large'}) => {
  return (
    <Row type="flex" justify="center">
      <Spin size={size}/>
    </Row>
  )
}
