import { BsCameraVideo, BsCheckLg } from 'react-icons/bs';
import { IoMdCall, IoMdMore } from 'react-icons/io';
import UserProfileIMG from '../../assets/image/user-profile.png';
import Pic1 from '../../assets/image/post-1.png';
import Pic2 from '../../assets/image/post-2.png';

interface ChatProps {
  className?: string;
  activeChat?: any;
}

const Chat = ({ className, activeChat }: ChatProps) => {
  return (
    <div className={`mt-[4.6rem] ${className}`}>
      <div className='w-full flex items-center px-6 pb-4 border-b border-b-[#F5F5F5]'>
        <div className='flex items-center'>
          <div className='relative w-[3.2rem] h-[3.2rem]'>
            <img
              src={UserProfileIMG}
              className='absolute top-0 left-0 w-full h-full object-cover'
            />
            <div className='w-2 h-2 bg-green rounded-full absolute right-2.5 top-[2.8rem]'></div>
          </div>
        </div>
        <div className='ml-4'>
          <p className='text-lg font-medium'>{activeChat?.name}</p>
          <p className='text-grey -mt-1'>{activeChat?.alt}</p>
        </div>

        <div className='ml-auto flex items-center gap-x-5'>
          <BsCameraVideo color='green' size='1.3rem' />
          <IoMdCall color='green' size='1.3rem' />
          <IoMdMore color='green' size='1.3rem' />
        </div>
      </div>
      <div className='mt-8 px-6 grid gap-y-6 h-[65vh] overflow-y-auto'>
        <div className='flex items-start max-w-[60%]'>
          <img src={UserProfileIMG} />
          <div className='flex items-center gap-x-5 ml-5 overflow-hidden'>
            <img
              src={Pic1}
              className='w-[9rem] h-[8rem] object-cover rounded'
            />
            <img
              src={Pic2}
              className='w-[9rem] h-[8rem] object-cover rounded'
            />
          </div>
        </div>

        <div className='flex flex-row-reverse items-start ml-auto max-w-[60%] '>
          <img src={UserProfileIMG} />
          <div className='mr-3 bg-green rounded-full text-white pr-12 pl-4 py-2 flex items-center'>
            <p className='w-[80%] pl-6'>
              Orders have been resent. A little patience Ma.
            </p>
            <p className='flex items-center gap-x-2 ml-auto w-[20%] self-end text-sm'>
              <BsCheckLg size='1.3rem' />
              09:30am
            </p>
          </div>
        </div>

        <p className='text-[#A5A5A5] text-center mt-2'>Tues Jan 02</p>

        <div>
          <div className='flex items-start max-w-[60%]'>
            <img src={UserProfileIMG} />
            <div className='ml-3'>
              <div className='bg-[#D8F6DD] rounded-full pl-4 pr-12 py-2 flex items-center'>
                <p className='w-[80%] pl-6'>
                  Please kindly replace my order thanks
                </p>
                <p className='flex items-center gap-x-2 ml-auto w-[20%] self-end text-sm'>
                  09:30am
                </p>
              </div>
              <div className='bg-[#D8F6DD] rounded-full pl-4 pr-12 py-4 flex items-center mt-1'>
                <p className='w-[80%] pl-6'>
                  I really enjoyed my experience with your guys. Your services
                  are top notch
                </p>
                <p className='flex items-center gap-x-2 ml-auto w-[20%] self-end text-sm'>
                  09:30am
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='flex flex-row-reverse items-start ml-auto max-w-[60%] '>
          <img src={UserProfileIMG} />
          <div className='mr-3 bg-green rounded-full text-white pr-4 py-2 flex items-center'>
            <audio controls className='bg-transparent'>
              <source src='horse.ogg' type='audio/ogg' />
              <source src='horse.mp3' type='audio/mpeg' />
              Your browser does not support the audio element.
            </audio>
            <p className='flex items-center gap-x-2 ml-auto w-[20%] self-end text-sm'>
              <BsCheckLg size='1.3rem' />
              09:30am
            </p>
          </div>
        </div>

        <p className='text-[#A5A5A5] text-center mt-2'>Tues Jan 02</p>

        <div>
          <div className='flex items-start max-w-[60%]'>
            <img src={UserProfileIMG} />
            <div className='ml-3'>
              <div className='bg-[#D8F6DD] rounded-full pl-4 pr-12 py-2 flex items-center'>
                <p className='w-[80%] pl-6'>
                  Please kindly replace my order thanks
                </p>
                <p className='flex items-center gap-x-2 ml-auto w-[20%] self-end text-sm'>
                  09:30am
                </p>
              </div>
              <div className='bg-[#D8F6DD] rounded-full pl-4 pr-12 py-2 flex items-center mt-1'>
                <p className='w-[80%] pl-6'>
                  I really enjoyed my experience with your guys. Your services
                  are top notch
                </p>
                <p className='flex items-center gap-x-2 ml-auto w-[20%] self-end text-sm'>
                  09:30am
                </p>
              </div>
            </div>
          </div>
          <div className='flex flex-row-reverse items-start ml-auto max-w-[60%] mt-6 mb-12'>
            <img src={UserProfileIMG} />
            <div className='mr-3 bg-green rounded-full text-white pr-12 pl-4 py-2 flex items-center'>
              <p className='w-[80%] pl-6'>
                Orders have been resent. A little patience Ma.
              </p>
              <p className='flex items-center gap-x-2 ml-auto w-[20%] self-end text-sm'>
                <BsCheckLg size='1.3rem' />
                09:30am
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
