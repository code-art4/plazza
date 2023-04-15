import AudioSectionIMG from '../../../assets/image/user-profile-lg.png';
import DanielFriendIMG from '../../../assets/image/daniel-friend.png';

const AudioSection = () => {
  return (
    <div className='w-1/2 fixed top-0 left-0 h-screen overflow-hidden bg-green'>
      <div
        className='top-1/2 absolute left-1/2'
        style={{ transform: 'translate(-50%, -50%)' }}
      >
        <div className='p-4 bg-[#D9D9D9]/40 w-full h-full rounded-full'>
          <div className='p-4 bg-[#D9D9D9]/40 w-full h-full rounded-full'>
            <img
              src={AudioSectionIMG}
              className='object-cover w-[9rem] h-[9rem]'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioSection;
