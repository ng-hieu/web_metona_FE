import { useSelector } from 'react-redux';
import AdminLayout from './layouts/AdminLayout'
import { Navigate, useRoutes, useSearchParams } from 'react-router-dom';
import LoginForm from './components/forms/admin/LoginForm';



export default function Router() {
    return useRoutes([
        {
            
            path: 'admin',
            element: <AdminLayout/>
        }
    ])
}