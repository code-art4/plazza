import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Description from '../pages/Description';
import LandingPage from '../pages';
import AuthenticatedLayout from '../layout/AuthenticatedLayout';
import CustomerProfile from './../pages/Profile/Customer';

// Define the paths as enums to avoid typos
enum RoutePaths {
  Login = '/login',
  Signup = '/signup',
  Description = '/description',
  LandingPage = '/',
  Authenticated = '/authenticated',
  CustomerProfile = '/profile',
}

const PageRoutes = () => {
  return (
    <>
      <Routes>
        <Route path={RoutePaths.LandingPage} element={<LandingPage />} />
        <Route path={RoutePaths.Login} element={<Login />} />
        <Route path={RoutePaths.Signup} element={<Signup />} />
        <Route path={RoutePaths.Description} element={<Description />} />
        <Route
          path={RoutePaths.Authenticated}
          element={<AuthenticatedLayout />}
        />
        <Route
          path={RoutePaths.CustomerProfile}
          element={<CustomerProfile />}
        />
      </Routes>
    </>
  );
};

export default PageRoutes;
