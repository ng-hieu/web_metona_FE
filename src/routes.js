import { useSelector } from 'react-redux';
import { Navigate, useRoutes, useSearchParams } from 'react-router-dom';
import AdminLayout from './layouts/AdminLayout';

export default function Router() {
    return useRoutes([
        {
            path: '/admin',
            element: <AdminLayout/>,

        }
    ])
}