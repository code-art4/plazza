import { useState } from 'react';
import { RxCaretDown } from 'react-icons/rx';
import { AiOutlineSearch, AiOutlineMore } from 'react-icons/ai';
import { Button, Input } from '../../../../components/ui';
import NigeriaSVG from '../../../../assets/nigeria.svg';
import ChatSVG from '../../../../assets/chat.svg';
import NotificationSVG from '../../../../assets/notification.svg';
import HelpSVG from '../../../../assets/help.svg';
import Profile from '../../../../assets/image/profile.png';

const Nav = () => {
  const [openSearch, setOpenSearch] = useState<boolean>(false);

  return (
    <nav className='fixed top-0 bg-white flex items-center px-32 pt-7 w-full'>
      <div className='w-20 h-12 bg-[#D9D9D9]'></div>
      <div className='ml-auto w-max flex items-center gap-x-3 mr-[12rem]'>
        {openSearch ? (
          <div className='flex items-center gap-x-3'>
            <Input
              placeholder='Search for products, brand and categories'
              type='search'
              id='search'
              name='search'
              className='!py-2.5 !w-[25rem]'
            />
            <Button className='h-max w-max px-5 py-3'>Search</Button>
          </div>
        ) : (
          <div className='rounded-full p-2 shadow-lg'>
            <AiOutlineSearch
              size='1.3rem'
              className='cursor-pointer'
              onClick={() => setOpenSearch(true)}
            />
          </div>
        )}
        <AiOutlineMore size='1.3rem' />
      </div>

      <div className='flex items-center gap-x-4 mr-32'>
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
