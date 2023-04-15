import AudioSection from './AudioSection';
import VideoSection from './VideoSection';

export interface CallProps {
  type?: 'video' | 'audio';
}

const CallType = ({ type }: CallProps) => {
  switch (type) {
    case 'video':
      return <VideoSection />;
    case 'audio':
      return <AudioSection />;
    default:
      return <VideoSection />;
  }
};

export default CallType;
