import React from 'react';
import { withRouter } from 'react-router-dom';
import { Layout, Typography } from 'antd';

const {Header} = Layout;

const AppHeader = React.memo((props) => {
  return (
      <Header className='app-header'>
        <Typography.Title>Weather Forecast</Typography.Title>
      </Header>
  );
});

export default withRouter(AppHeader);
