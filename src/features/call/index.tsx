import { TiTimes } from 'react-icons/ti';
// import { IoSettingsSharp, IoCall } from 'react-icons/io';
import { GiSpeaker, GiSpeakerOff } from 'react-icons/gi';
import {
  BsMic,
  BsMicMute,
  BsCameraVideo,
  BsCameraVideoOff,
} from 'react-icons/bs';

interface CallProps {
  type?: 'video' | 'audio';
}

const Call = ({ type }: CallProps) => {
  return (
    <div className='relative'>
      <TiTimes color='#fff' size='.9rem' className='absolute top-3' />

      <div className='absolute bottom-12 left-8'>
        <GiSpeaker />
        <BsMic />
        {/* <div className='bg-red p-3 rounded-full'>
          <IoCall />
        </div> */}
        <BsCameraVideo />
        {/* <IoSettingsSharp /> */}
      </div>
    </div>
  );
};

export default Call;

// switch (type) {
//   case 'video':
//     return <VideoCall />;
//   case 'audio':
//     return <AudioCall />;
//   default:
//     return <AudioCall />;
// }
