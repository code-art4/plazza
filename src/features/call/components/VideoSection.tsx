import DanielLargeIMG from '../../../assets/image/daniel-lg.png';
import DanielFriendIMG from '../../../assets/image/daniel-friend.png';

const VideoSection = () => {
  return (
    <div className='w-1/2 fixed top-0 left-0 h-screen overflow-hidden'>
      <img src={DanielLargeIMG} className='w-full h-full object-cover' />

      <div className='absolute top-16 right-8 w-[13rem] h-[16rem] rounded overflow-hidden'>
        <img src={DanielFriendIMG} className='w-full h-full object-cover' />
      </div>
    </div>
  );
};

export default VideoSection;
