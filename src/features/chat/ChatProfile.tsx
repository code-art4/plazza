import UserProfileIMG from '../../assets/image/user-profile.png';

interface ChatProfileProps {
  active?: boolean;
  activeChat: {
    name: string;
    alt: string;
    timeStamp: string;
    unreadMessages: number;
  };
  onClick: () => void;
}

const ChatProfile = ({ active, activeChat, onClick }: ChatProfileProps) => {
  return (
    <div
      className={`flex items-center px-10 py-4 w-full cursor-pointer ${
        active ? 'bg-[#E1FFE6]' : ''
      }`}
      onClick={onClick}
    >
      <div>
        <img src={UserProfileIMG} />
      </div>
      <div className='flex justify-between w-full items-center ml-4'>
        <div className='mr-auto'>
          <h4 className='font-medium'>{activeChat.name}</h4>
          <p className='text-grey text-sm'>{activeChat.alt}</p>
        </div>
        <div className='ml-auto flex flex-col items-end'>
          <p className='text-green font-medium'>{activeChat.timeStamp}</p>
          <p className='text-white bg-green rounded-full w-5 h-5 text-center text-sm'>
            {activeChat.unreadMessages}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatProfile;
