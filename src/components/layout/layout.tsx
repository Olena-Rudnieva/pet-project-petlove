import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/header';
import { Loader } from 'components/loader';

export const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
