import { Button, Input } from '../components/ui';
import { RxCaretDown } from 'react-icons/rx';
import NigeriaSVG from '../assets/nigeria.svg';
import ChatSVG from '../assets/chat.svg';
import NotificationSVG from '../assets/notification.svg';
import HelpSVG from '../assets/help.svg';
import Profile from '../assets/image/profile.png';
import Dashboard from '../assets/dashboard.svg';
import Sales from '../assets/sales.svg';
import Wallet from '../assets/wallet.svg';
import Catalog from '../assets/catalog.svg';
import Friend from '../assets/friend.svg';
import Speaker from '../assets/speaker.svg';
import QRCode from '../assets/qr-code.svg';
import Settings from '../assets/settings.svg';
import Help from '../assets/help-center.svg';
import LogOut from '../assets/logout.svg';

interface AuthenticatedLayoutProps {
  topBar?: boolean;
  children?: React.ReactNode;
  className?: string;
}

const AuthenticatedLayout = ({
  children,
  topBar,
  className,
}: AuthenticatedLayoutProps) => {
  return (
    <div>
      <div className='fixed flex flex-col h-screen left-0 top-0 w-[20%] py-12 px-12 shadow'>
        <div className='w-28 h-20 self-center bg-[#A2A2A2]'></div>

        <div className='mt-16'>
          <ul className='text-[#A5A5A5] flex flex-col gap-y-8'>
            <li className='text-green flex items-center gap-x-3 font-medium'>
              <img src={Dashboard} className='w-4 h-4' />
              Dashboard
            </li>
            <li className='flex items-center gap-x-3 font-medium'>
              <img src={Sales} className='w-4 h-4' />
              Sales
            </li>
            <li className='flex items-center gap-x-3 font-medium'>
              <img src={Wallet} className='w-4 h-4' />
              Payment Method
            </li>
            <li className='flex items-center gap-x-3 font-medium'>
              <img src={Catalog} className='w-4 h-4' />
              Catalog
            </li>
            <li className='flex items-center gap-x-3 font-medium'>
              <img src={Friend} className='w-4 h-4' />
              Customers
            </li>
            <li className='flex items-center gap-x-3 font-medium'>
              <img src={Speaker} className='w-4 h-4' />
              Marketing
            </li>
            <li className='flex items-center gap-x-3 font-medium'>
              <img src={QRCode} className='w-4 h-4' />
              QR code
            </li>
            <li className='flex items-center gap-x-3 font-medium'>
              <img src={Settings} className='w-4 h-4' />
              Settings
            </li>
          </ul>
        </div>

        <div className='mt-auto'>
          <ul className='text-[#A5A5A5] font-medium'>
            <li className='flex items-center gap-x-3 font-medium'>
              <img src={Help} className='w-4 h-4' />
              Help Center
            </li>
            <li className='text-red flex items-center gap-x-3 font-medium mt-8'>
              <img src={LogOut} className='w-4 h-4' />
              Logout
            </li>
          </ul>
        </div>
      </div>
      {topBar ? (
        <div className='py-8 fixed top-0 right-0 w-[80%] ml-auto shadow px-10 flex items-center z-[2] bg-white'>
          <h3 className='text-xl font-semibold text-green'>Welcome Dan!</h3>
          <div className='mx-auto flex items-center gap-x-3'>
            <Input
              placeholder='Search'
              type='search'
              id='search'
              name='search'
              className='!py-2.5 !w-[30rem]'
            />
            <Button className='w-max h-max px-6 py-3'>Search</Button>
          </div>

          <div className='flex items-center gap-x-4 ml-auto'>
            <img src={NigeriaSVG} className='' />
            <img src={ChatSVG} className='' />
            <img src={NotificationSVG} className='' />
            <img src={HelpSVG} className='' />
            <div className='flex items-center'>
              <img src={Profile} className='w-8 h-8' />
              <RxCaretDown size='1rem' />
            </div>
          </div>
        </div>
      ) : null}
      <div
        className={`w-[80%] ml-auto py-8 overflow-hidden z-[1] min-h-[calc(100vh-11vh)] ${
          topBar ? 'mt-20' : ''
        } ${className}`}
      >
        {children}
      </div>
    </div>
  );
};

export default AuthenticatedLayout;
