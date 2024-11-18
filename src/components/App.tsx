import { Routes, Route } from 'react-router-dom';
import { lazy, useEffect } from 'react';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Layout } from './layout';
import { Loader } from './loader';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'redux/store';
import { useSelector } from 'react-redux';
import { refreshUser, selectIsRefreshing } from '../redux/auth';
import { PrivateRoute } from './privateRoute';
import { RestrictedRoute } from './restrictedRoute';

const Home = lazy(() => import('pages/home'));
const News = lazy(() => import('pages/news/news'));
const Notices = lazy(() => import('pages/notices/notices'));
const Friends = lazy(() => import('pages/friends/friends'));
const Registration = lazy(() => import('pages/registration/registration'));
const Login = lazy(() => import('pages/login/login'));
const Profile = lazy(() => import('pages/profile/profile'));
const NotFound = lazy(() => import('pages/notFound/notFound'));
const AddPet = lazy(() => import('pages/addPet/addPet'));

export const App = () => {
  const dispatch = useDispatch<AppDispatch>();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/notices" element={<Notices />} />
          <Route path="/friends" element={<Friends />} />
          <Route element={<RestrictedRoute />}>
            <Route path="/register" element={<Registration />} />
            <Route path="/login" element={<Login />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/add-pet" element={<AddPet />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
};
