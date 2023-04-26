import { RxCaretDown } from 'react-icons/rx';
import NigeriaSVG from '../../../assets/nigeria.svg';
import ChatSVG from '../../../assets/chat.svg';
import NotificationSVG from '../../../assets/notification.svg';
import HelpSVG from '../../../assets/help.svg';
import Profile from '../../../assets/image/profile.png';

interface CallNavProps {
  className?: string;
}

const Nav = ({ className }: CallNavProps) => {
  return (
    <nav
      className={`fixed top-0 bg-white flex items-center pr-12 pt-7 w-1/2 ${className}`}
    >
      <div className='flex ml-auto items-center gap-x-4'>
        <img src={NigeriaSVG} />
        <img src={ChatSVG} />
        <img src={NotificationSVG} />
        <img src={HelpSVG} />
        <div className='flex items-center'>
          <img src={Profile} className='w-8 h-8' />
          <RxCaretDown size='1rem' />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
