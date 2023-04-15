import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Description from '../pages/Description';
import LandingPage from '../pages';
import AuthenticatedLayout from '../layout/AuthenticatedLayout';
import CustomerProfile from './../pages/Profile/Customer';
import VendorProfile from '../pages/Profile/User';
import VideoCall from '../pages/Call/video';
import AudioCall from './../pages/Call/audio';
import Chat from '../pages/Chat';
import Dashboard from '../pages/Dashboard';

// Define the paths as enums to avoid typos
enum RoutePaths {
  Login = '/login',
  Signup = '/signup',
  Description = '/description',
  LandingPage = '/',
  Authenticated = '/authenticated',
  CustomerProfile = '/profile',
  VendorProfile = '/vendor/profile',
  VideoCall = '/call/video',
  AudioCall = 'call',
  Chat = '/chat',
  Dashboard = '/dashboard',
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
        <Route path={RoutePaths.VendorProfile} element={<VendorProfile />} />
        <Route path={RoutePaths.VideoCall} element={<VideoCall />} />
        <Route path={RoutePaths.AudioCall} element={<AudioCall />} />
        <Route path={RoutePaths.Chat} element={<Chat />} />
        <Route path={RoutePaths.Dashboard} element={<Dashboard />} />
      </Routes>
    </>
  );
};

export default PageRoutes;
