import { useSelector } from 'react-redux';
import AdminLayout from './layouts/AdminLayout'
import { Navigate, useRoutes, useSearchParams } from 'react-router-dom';
import { ChildCare } from '@mui/icons-material';
import { chipClasses } from '@mui/material';
import ProductHome from './components/adminHome/ProductHome';

export default function Router() {
    return useRoutes([
        {
            path: 'admin',
            element: <AdminLayout/>,
            children: [
                { path: 'home', element: <ProductHome/>}
            ]
        }
    ])
}