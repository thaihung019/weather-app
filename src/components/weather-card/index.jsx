import React from 'react';
import { Card } from 'antd';

const WeatherCard = ({ children, bordered = false, ...rest}) => {
  return (
      <Card bordered={bordered} {...rest}>
        {children}
      </Card>
  );
};

export default WeatherCard;
