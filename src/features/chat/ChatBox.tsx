import Emoji from '../../assets/emoji.svg';
import { BsFillMicFill, BsCursorFill } from 'react-icons/bs';
import { AiOutlineLink } from 'react-icons/ai';

const ChatBox = ({
  className,
  inputClassName,
}: {
  className?: string;
  inputClassName?: string;
}) => {
  return (
    <div
      className={`bg-white flex items-center fixed bottom-12 shadow w-[42%] right-9 rounded-l-full overflow-hidden ${className}`}
    >
      <div className='flex items-center bg-[#F2F0F0] pl-4'>
        <img src={Emoji} className='w-5 h-5' />
        <input
          type='text'
          placeholder='Type message'
          className={`ml-5 w-[32rem] outline-none pl-3 bg-[#F2F0F0] py-3 ${inputClassName}`}
        />
      </div>

      <div className='flex items-center gap-x-4 pr-8 mx-3'>
        <BsFillMicFill color='green' size='1.2rem' />
        <AiOutlineLink color='green' size='1.2rem' />
        <BsCursorFill color='green' size='1.2rem' />
      </div>
    </div>
  );
};

export default ChatBox;
