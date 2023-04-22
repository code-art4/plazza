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
import Order from '../pages/Order';
import Shipment from '../pages/Shipment';
import Invoice from '../pages/Invoice';
import Refund from '../pages/Refund';
import Transaction from '../pages/Transaction';
import Booking from '../pages/Booking';
import Details from '../pages/Order/Details';
import Tracking from '../pages/Order/Tracking';
import Refunds from '../pages/Refunds';

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
  Order = '/order',
  Details = '/order/details',
  Shipment = '/shipment',
  Invoice = '/invoice',
  Refund = '/refund',
  Refunds = '/refund/:id',
  Transaction = '/transaction',
  Booking = '/booking',
  Tracking = '/track',
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
        <Route path={RoutePaths.Order} element={<Order />} />
        <Route path={RoutePaths.Shipment} element={<Shipment />} />
        <Route path={RoutePaths.Invoice} element={<Invoice />} />
        <Route path={RoutePaths.Refund} element={<Refund />} />
        <Route path={RoutePaths.Transaction} element={<Transaction />} />
        <Route path={RoutePaths.Booking} element={<Booking />} />
        <Route path={RoutePaths.Details} element={<Details />} />
        <Route path={RoutePaths.Tracking} element={<Tracking />} />
        <Route path={RoutePaths.Refunds} element={<Refunds />} />
      </Routes>
    </>
  );
};

export default PageRoutes;
