import { TopNav, CallType } from './components';
import { TiTimes } from 'react-icons/ti';
import { IoMdCall } from 'react-icons/io';
import { RiSettings5Fill } from 'react-icons/ri';
import { GiSpeaker, GiSpeakerOff } from 'react-icons/gi';
import {
  BsMic,
  BsMicMute,
  BsCameraVideo,
  BsCameraVideoOff,
} from 'react-icons/bs';
import { CallProps } from './components/CallType';
import Chat from '../chat';
import ChatBox from '../chat/ChatBox';

const CallLayout = ({ type }: CallProps) => {
  return (
    <div className='flex max-h-screen'>
      <div className='w-1/2 h-full'>
        <CallType type={type} />
        <div className='relative w-full'>
          <div className='absolute flex top-7 left-12 w-[82%]'>
            <TiTimes color='#fff' size='1.4rem' />

            <div className='bg-[#D9D9D9]/30 rounded-lg w-max mx-auto flex items-center px-3 py-1'>
              <div className='w-2 h-2 bg-red rounded-full'></div>
              <p className='font-medium text-white ml-2'>12:45</p>
            </div>
          </div>
        </div>
        <div className='absolute flex items-center justify-between w-[35%] bottom-12 left-24'>
          <GiSpeaker size='1.4rem' color='#fff' className='cursor-pointer' />
          <BsMic size='1.2rem' color='#fff' className='cursor-pointer' />
          <div className='bg-red p-3 rounded-full cursor-pointer'>
            <IoMdCall size='1.7rem' color='#fff' className='cursor-pointer' />
          </div>
          <BsCameraVideo
            size='1.2rem'
            color='#fff'
            className='cursor-pointer'
          />
          <RiSettings5Fill
            size='1.2rem'
            color='#fff'
            className='cursor-pointer'
          />
        </div>
      </div>
      <div className='w-1/2 h-full'>
        <TopNav />
        <Chat />
        <ChatBox />
      </div>
    </div>
  );
};

export default CallLayout;
