import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Description from '../pages/Description';
import LandingPage from '../pages';

// Define the paths as enums to avoid typos
enum RoutePaths {
  Login = '/login',
  Signup = '/signup',
  Description = '/description',
  LandingPage = '/',
}

const PageRoutes = () => {
  return (
    <>
      <Routes>
        <Route path={RoutePaths.LandingPage} element={<LandingPage />} />
        <Route path={RoutePaths.Login} element={<Login />} />
        <Route path={RoutePaths.Signup} element={<Signup />} />
        <Route path={RoutePaths.Description} element={<Description />} />
      </Routes>
    </>
  );
};

export default PageRoutes;
