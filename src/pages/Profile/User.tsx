import Profile from '../../features/profile/vendor/Profile';
import { Card, Nav } from './../../features/profile/components';

const VendorProfile = () => {
  return (
    <div className='bg-[#FCFCFC] px-32'>
      <Nav />
      <Profile />
      <div className='w-[70%] ml-auto mt-20'>
        <div className=''>
          <h3 className='text-green text-xl font-medium mb-8'>
            Shop and Posts{' '}
          </h3>

          <div className='grid grid-cols-2 gap-x-12 gap-y-10 mb-10'>
            {Array(5)
              .fill(1)
              .map((_, i) => (
                <Card />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorProfile;
