import { Button, Input } from '../../../components/ui';
import { RxCaretDown } from 'react-icons/rx';
import NigeriaSVG from '../../../assets/nigeria.svg';
import ChatSVG from '../../../assets/chat.svg';
import NotificationSVG from '../../../assets/notification.svg';
import HelpSVG from '../../../assets/help.svg';
import Profile from '../../../assets/image/profile.png';

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
      <div className='py-8 fixed top-0 right-0 w-full ml-auto shadow px-10 flex items-center z-[9999] bg-white'>
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
      <div className='py-8 overflow-hidden z-[1] min-h-[calc(100vh-20vh)] px-10 mt-32 flex gap-x-10 w-[80%] mx-auto'>
        {children}
      </div>
    </div>
  );
};

export default AuthenticatedLayout;
