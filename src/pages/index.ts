import { lazy } from 'react';

const Home = lazy(() => import('@/pages/home'));
const Users = lazy(() => import('@/pages/users'));
const AuthenticationPage = lazy(() => import('@/pages/auth'));
const Dashboard = lazy(() => import('@/pages/dashboard'));
const Products = lazy(() => import('@/pages/products'));
const Orders = lazy(() => import('@/pages/orders'));
const Brands = lazy(() => import('@/pages/brands'));

export { Home, Users, Dashboard, AuthenticationPage, Products, Orders, Brands };
