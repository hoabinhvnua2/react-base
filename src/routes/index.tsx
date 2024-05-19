import { Navigate, useRoutes } from 'react-router-dom';
import AuthGuard from '../guards/AuthGuard';
import GuestGuard from '../guards/GuestGuard';

export default function Router() {
  return useRoutes([
    {
      path: 'auth',
      children: [
        {
          path: 'login',
          element: <GuestGuard>{/* <Login /> */}</GuestGuard>
        },
        {
          path: 'register',
          element: <GuestGuard>{/* <Register /> */}</GuestGuard>
        }
      ]
    },

    // Dashboard Routes
    {
      path: 'dashboard',
      element: <AuthGuard>{/* <DashboardLayout /> */}</AuthGuard>,
      children: [
        //   { element: <Navigate to={PATH_AFTER_LOGIN} replace />, index: true },
        //   { path: 'app', element: <GeneralApp /> },
      ]
    },

    { path: '*', element: <Navigate to='/404' replace /> }
  ]);
}
