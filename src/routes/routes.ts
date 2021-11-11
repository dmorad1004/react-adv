import { lazy } from 'react';
import React from 'react';
import { NoLazy } from '../01-lazyload/pages/NoLazy';

type JSXcomponent = () => JSX.Element;

interface Route {
    path: string;
    component: React.LazyExoticComponent<JSXcomponent> | JSXcomponent;
    name: string;
    children?: Route[];
}

// const LazyPage1 = lazy(() => import(/*webpackChunkName:"LazyPage1" */ '../01-lazyload/pages/LazyPage1'));

export const routes: Route[] = [
    {
        path: '/lazyload/*',
        component: lazy(() => import(/*webpackChunkName:"lazyLayout"*/ '../01-lazyload/layout/LazyLayout')),
        name: 'LazyLoading Nested',
    },

    {
        path: '/no-lazy',
        component: NoLazy,
        name: 'No lazy loading',
    },
];
