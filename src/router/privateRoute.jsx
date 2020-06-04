import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

function mapState(state) {
  return ({
    isAuthorized: false,
  })
}

const PrivateRender = (Component, {title}) => {
  document.title = title;
  return (<Component />)
};


const PrivateRoute = connect(mapState)(({component, isAuthorized, ...rest}) => {
  return (
    <Route {...rest} render = {(props) => PrivateRender(component, rest = {...rest, ...props})} />
  )
});

export default PrivateRoute;
