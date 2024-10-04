import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { useDispatch } from 'react-redux';
// import { selectIsRefreshing } from '../redux/auth/authSelectors';
// import { refreshUser } from '../redux/auth/authOperation';

import { Layout } from './layout';
import { Loader } from './loader';

const Home = lazy(() => import('pages/home'));
const News = lazy(() => import('pages/news/news'));
const Notices = lazy(() => import('pages/notices/notices'));
const Friends = lazy(() => import('pages/friends/friends'));
const Registration = lazy(() => import('pages/registration/registration'));
const Login = lazy(() => import('pages/login/login'));
const Profile = lazy(() => import('pages/profile/profile'));
// const NotFound = lazy(() => import('../pages/NotFound/NotFound'));
const AddPet = lazy(() => import('pages/addPet/addPet'));

export const App = () => {
  // const dispatch = useDispatch();
  // const isRefreshing = useSelector(selectIsRefreshing);
  const isRefreshing = false;

  // useEffect(() => {
  //   dispatch(refreshUser());
  // }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="/home" element={<Home />} /> */}
          <Route path="/news" element={<News />} />
          <Route path="/notices" element={<Notices />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/add-pet" element={<AddPet />} />
          {/* <Route path="*" element={<NotFound />} />  */}
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
};
