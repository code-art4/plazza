import { useState } from 'react';
import AuthenticatedLayout from '../layout/AuthenticatedLayout';
import UserProfile from '../assets/image/user-profile.png';
import {
  AiOutlineSearch,
  AiOutlineMore,
  AiOutlinePlus,
  AiOutlineFolder,
} from 'react-icons/ai';
import { RxCaretDown, RxVideo } from 'react-icons/rx';
import { HiOutlineDocument, HiOutlinePhone } from 'react-icons/hi';
import { Button, Input } from '../components/ui';
import ChatProfile from '../features/chat/ChatProfile';
import Chat from '../features/chat';
import { TopNav } from '../features/call/components';
import ChatBox from '../features/chat/ChatBox';

const ChatPage = () => {
  const [openSearch, setOpenSearch] = useState(false);

  const chatsList = [
    {
      name: 'Daniel Plazzar',
      id: 1,
      alt: 'Daniel Plazzar',
      timeStamp: '09: 30 am',
      unreadMessages: 2,
    },
    {
      name: 'Daniel Plazzar',
      id: 2,
      alt: 'Daniel Plazzar',
      timeStamp: '09: 30 am',
      unreadMessages: 2,
    },
    {
      name: 'Daniel Plazzar',
      id: 3,
      alt: 'Daniel Plazzar',
      timeStamp: '09: 30 am',
      unreadMessages: 2,
    },
    {
      name: 'Daniel Plazzar',
      id: 4,
      alt: 'Daniel Plazzar',
      timeStamp: '09: 30 am',
      unreadMessages: 2,
    },
    {
      name: 'Daniel Plazzar',
      id: 5,
      alt: 'Daniel Plazzar',
      timeStamp: '09: 30 am',
      unreadMessages: 2,
    },
    {
      name: 'Daniel Plazzar',
      id: 6,
      alt: 'Daniel Plazzar',
      timeStamp: '09: 30 am',
      unreadMessages: 2,
    },
    {
      name: 'Daniel Plazzar',
      id: 7,
      alt: 'Daniel Plazzar',
      timeStamp: '09: 30 am',
      unreadMessages: 2,
    },
    {
      name: 'Daniel Plazzar',
      id: 8,
      alt: 'Daniel Plazzar',
      timeStamp: '09: 30 am',
      unreadMessages: 2,
    },
    {
      name: 'Daniel Plazzar',
      id: 9,
      alt: 'Daniel Plazzar',
      timeStamp: '09: 30 am',
      unreadMessages: 2,
    },
    {
      name: 'Daniel Plazzar',
      id: 10,
      alt: 'Daniel Plazzar',
      timeStamp: '09: 30 am',
      unreadMessages: 2,
    },
    {
      name: 'Daniel Plazzar',
      id: 11,
      alt: 'Daniel Plazzar',
      timeStamp: '09: 30 am',
      unreadMessages: 2,
    },
  ];

  const [activeChat, setActiveChat] = useState(chatsList[0]);

  return (
    <AuthenticatedLayout topBar={false}>
      <div className='w-full flex'>
        <div className='w-[40%]'>
          <header className='flex items-center w-full px-10'>
            <h3 className='text-2xl font-medium'>Chat</h3>
            <div className='ml-auto w-max flex items-center gap-x-3'>
              {openSearch ? (
                <div className='flex items-center gap-x-3 ml-4'>
                  <Input
                    placeholder='Search'
                    type='search'
                    id='search'
                    name='search'
                    className='!py-2 !w-[10rem]'
                  />
                  <Button className='h-max w-max px-5 py-2.5'>Search</Button>
                </div>
              ) : (
                <div className='rounded-full p-2 shadow-lg'>
                  <AiOutlineSearch
                    size='1.2rem'
                    className='cursor-pointer'
                    onClick={() => setOpenSearch(true)}
                  />
                </div>
              )}
              <AiOutlineMore size='1.3rem' />
            </div>
          </header>
          <main className='mt-4'>
            <div>
              {chatsList.map((chat) => (
                <ChatProfile
                  active={chat.id === activeChat.id}
                  activeChat={chat}
                  onClick={() => setActiveChat(chat)}
                />
              ))}
            </div>
          </main>
        </div>
        <div className='w-[60%] relative max-h-screen mr-4 -mt-5'>
          <TopNav />
          <Chat />
          <ChatBox            />
        </div>

        {/* <div className='w-[20%] ml-auto mt-16'>
          <div className='flex flex-col items-center -ml-[4rem] mb-7'>
            <div className='flex mx-auto items-center w-max mb-5'>
              <img src={UserProfile} className='-mr-8 scale-[120%] z-[1]' />
              <img src={UserProfile} className='-mr-8 scale-[120%] z-[2]' />
              <img src={UserProfile} className='-mr-8 scale-[120%] z-[1]' />
            </div>
            <p className='ml-7 font-medium -mt-2'> Plazzar Group </p>
          </div>

          <div className='pr-4'>
            <span className='flex items-center justify-between font-medium'>
              Members <RxCaretDown size='1.2rem' />
            </span>

            <div>
              <span className='flex items-center mt-2 gap-x-4 text-green font-medium mb-5'>
                {' '}
                <div className='bg-[#E8F8EB] p-2 rounded-full'>
                  <AiOutlinePlus size='1.1rem' />
                </div>
                Add Members
              </span>

              <div className='flex items-center gap-x-3 mb-2'>
                <img src={UserProfile} />
                <span>You</span>
              </div>
              <div className='flex items-center gap-x-3 mb-2'>
                <img src={UserProfile} />
                <span>Susan</span>
              </div>
              <div className='flex items-center gap-x-3 mb-2'>
                <img src={UserProfile} />
                <span>Benson B.</span>
              </div>
              <div className='flex items-center gap-x-3 mb-2'>
                <img src={UserProfile} />
                <span>Nathaniel S.</span>
              </div>
            </div>

            <div className='mt-6'>
              <span className='flex items-center justify-between font-medium mb-3'>
                Attachments <RxCaretDown />
              </span>

              <div className='mt-2'>
                <div className='flex items-center gap-x-3 mb-4'>
                  <div className='bg-[#E8F8EB] p-2 rounded-full'>
                    <HiOutlineDocument size='1.2rem' color='green' />
                  </div>
                  <div>
                    <p className='font-medium'>Document</p>
                    <p className='text-[#A5A5A5] text-sm'>129 Files - 375 MB</p>
                  </div>
                </div>

                <div className='flex items-center gap-x-3 mb-4'>
                  <div className='bg-[#E8F8EB] p-2 rounded-full'>
                    <HiOutlineDocument size='1.2rem' color='green' />
                  </div>
                  <div>
                    <p className='font-medium'>Photo</p>
                    <p className='text-[#A5A5A5] text-sm'>129 Files - 375 MB</p>
                  </div>
                </div>
                <div className='flex items-center gap-x-3 mb-4'>
                  <div className='bg-[#E8F8EB] p-2 rounded-full'>
                    <HiOutlinePhone size='1.2rem' color='green' />
                  </div>
                  <div>
                    <p className='font-medium'>Videos</p>
                    <p className='text-[#A5A5A5] text-sm'>129 Files - 375 MB</p>
                  </div>
                </div>
                <div className='flex items-center gap-x-3 mb-4'>
                  <div className='bg-[#E8F8EB] p-2 rounded-full'>
                    <RxVideo size='1.2rem' color='green' />
                  </div>
                  <div>
                    <p className='font-medium'>Other Files</p>
                    <p className='text-[#A5A5A5] text-sm'>129 Files - 375 MB</p>
                  </div>
                </div>
                <div className='flex items-center gap-x-3 mb-4'>
                  <div className='bg-[#E8F8EB] p-2 rounded-full'>
                    <AiOutlineFolder size='1.2rem' color='green' />
                  </div>
                  <div>
                    <p>Document</p>
                    <p>129 Files - 375 MB</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </AuthenticatedLayout>
  );
};

export default ChatPage;
