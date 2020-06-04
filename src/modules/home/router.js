import { lazy } from 'react';

export default [
  {
    path: '/',
    component: lazy(() => import(/*webpackChunkName: "home"*/'./index')),
    exact: true,
    title: 'Home',
  }
]
