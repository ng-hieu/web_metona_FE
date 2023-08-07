import { useSelector } from 'react-redux';
import AdminLayout from './layouts/AdminLayout'
import { Navigate, useRoutes, useSearchParams } from 'react-router-dom';
import { ChildCare } from '@mui/icons-material';
import { chipClasses } from '@mui/material';
import AdminHome from './components/showProduct/AdminHome';
import LoginPage from './pages/AdminPages/LoginPage';

export default function Router() {
    return useRoutes([
        {
            path: 'admin',
            element: <AdminLayout/>,
            children: [
                { path: 'home', element: <AdminHome/>}
            ]
        },
        {path:'login', element: <LoginPage/>}
    ])
}