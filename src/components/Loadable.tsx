/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComponentType, Suspense } from 'react';

const Loadable = (Component: ComponentType) => (props: any) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  //   const { pathname } = useLocation();

  return (
    <Suspense fallback={'Loading...'}>
      <Component {...props} />
    </Suspense>
  );
};

export default Loadable;
