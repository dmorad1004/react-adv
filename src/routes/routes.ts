import { lazy } from 'react';
import React from 'react';

type JSXcomponent = () => JSX.Element;

interface Route {
    path: string;
    component: React.LazyExoticComponent<JSXcomponent> | JSXcomponent;
    name: string;
    children?: Route[];
}

const LazyPage1 = lazy(() => import(/*webpackChunkName:"LazyPage1" */ '../01-lazyload/pages/LazyPage1'));
const LazyPage2 = lazy(() => import(/*webpackChunkName:"LazyPage2" */ '../01-lazyload/pages/LazyPage2'));
const LazyPage3 = lazy(() => import(/*webpackChunkName:"LazyPage3" */ '../01-lazyload/pages/LazyPage3'));

export const routes: Route[] = [
    {
        path: '/lazy1',
        component: LazyPage1,
        name: 'lazyPage-1',
    },
    {
        path: '/lazy2',
        component: LazyPage2,
        name: 'lazyPage-2',
    },
    {
        path: '/lazy3',
        component: LazyPage3,
        name: 'lazyPage-3',
    },
];
