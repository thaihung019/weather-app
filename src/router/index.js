import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { NotFound, Loading } from 'components';
import HomeRoute from 'modules/home/router';
import PrivateRoute from './privateRoute';

const rootRouter = [
  ...HomeRoute,
  {
    path: '**',
    component: NotFound,
  }
];

export default () => {
  return (
    <Suspense fallback={<Loading/>}>
      <Switch>
        {
          rootRouter.map(({isPublic, component: Component, ...rest}, idx) => {
            if (!isPublic) {
              return <PrivateRoute key={idx} component={Component} {...rest}/>
            } else {
              return (
                <Route key={idx} component={Component} {...rest}/>
              )
            }
          })
        }
      </Switch>
    </Suspense>
  )
}
