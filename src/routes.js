import { useSelector } from 'react-redux';
import AdminLayout from './layouts/AdminLayout'
import { Navigate, useRoutes, useSearchParams } from 'react-router-dom';
import { ChildCare } from '@mui/icons-material';
import { chipClasses } from '@mui/material';
import ProductsHome from './components/adminHome/ProductsHome';
import CategoriesHome from './components/adminHome/CategoriesHome';

export default function Router() {
    return useRoutes([
        {
            path: 'admin',
            element: <AdminLayout/>,
            children: [
                { path: 'products', element: <ProductsHome/>},
                { path: 'categories', element: <CategoriesHome /> }
            ]
        }
    ])
}