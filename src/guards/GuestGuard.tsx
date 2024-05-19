/* eslint-disable @typescript-eslint/no-explicit-any */
// import { Navigate } from 'react-router-dom';
// // hooks
// import useAuth from '../hooks/useAuth';
// // routes
// import { PATH_DASHBOARD } from '../routes/paths';

// ----------------------------------------------------------------------

export default function GuestGuard({ children }: any) {
  //   const { isAuthenticated } = useAuth();

  //   if (isAuthenticated) {
  //     return <Navigate to={PATH_DASHBOARD.root} />;
  //   }

  return <>{children}</>;
}
