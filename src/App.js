import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Layout, message } from 'antd';
import { Header } from 'components';
import RouterOutlet from './router';

import './App.less';

const {Content} = Layout;

const mapState = state => ({});

const mapDispatch = (dispatch) => bindActionCreators({
}, dispatch);

export default @connect(mapState, mapDispatch)
class App extends PureComponent {
  constructor(props) {
    super(props);
    message.config({
      duration: 3,
      maxCount: 2,
    });
  }

  render() {
    return (
      <Layout className="app-wrapper">
        <Header/>
        <Content className="container">
          <RouterOutlet/>
        </Content>
      </Layout>
    );
  }
}
