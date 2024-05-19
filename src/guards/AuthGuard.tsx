/* eslint-disable @typescript-eslint/no-explicit-any */

export default function AuthGuard({ children }: any) {
  // const { isAuthenticated, isInitialized } = useAuth();

  // const { pathname } = useLocation();

  // const [requestedLocation, setRequestedLocation] = useState(null);

  // if (!isInitialized) {
  //   return <LoadingScreen />;
  // }

  // if (!isAuthenticated) {
  //   if (pathname !== requestedLocation) {
  //     setRequestedLocation(pathname);
  //   }
  //   return <Login />;
  // }

  // if (requestedLocation && pathname !== requestedLocation) {
  //   setRequestedLocation(null);
  //   return <Navigate to={requestedLocation} />;
  // }

  return <>{children}</>;
}
