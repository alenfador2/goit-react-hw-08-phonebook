import { Suspense } from 'react';
import { Outlet } from 'react-router';
import Loader from 'components/Loader/Loader';
import Menu from 'components/Menu/Menu';

const Layout = () => {
  return (
    <>
      <Menu />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
