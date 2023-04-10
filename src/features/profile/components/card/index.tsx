import { AiOutlineMore } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../../../components/ui';
import AUserProfile from '../../../../assets/image/blue-tyga.png';
import OrangeBlackChairIMG from '../../../../assets/image/Orange&BlackChair.png';

const Card = () => {
  const navigate = useNavigate();
  return (
    <div className='w-full'>
      <div className='flex items-center justify-between mb-3'>
        <div className='flex px-4'>
          <div>
            <img src={AUserProfile} />
          </div>
          <div className='ml-3'>
            <p className='font-medium'>Blue Tyga</p>
            <p className='text-[#888888] text-sm -mt-1'>Distributor</p>
          </div>
        </div>
        <div className='flex items-center'>
          <Button
            type='secondary'
            className='w-max px-4 py-2 h-max mr-3 font-medium'
          >
            Follow
          </Button>
          <AiOutlineMore />
        </div>
      </div>
      <div>
        <img
          src={OrangeBlackChairIMG}
          onClick={() => navigate('/description')}
          className='cursor-pointer w-full'
        />
      </div>
    </div>
  );
};

export default Card;
