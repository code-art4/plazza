import { Card, Nav } from './../../features/profile/components';
import CoverIMG from '../../assets/image/customer-profile.png';
import Profile from '../../features/profile/customer/Profile';

const CustomerProfile = () => {
  return (
    <div className='bg-[#FCFCFC]'>
      <Nav />
      <div className='w-screen h-[18rem] mt-7 px-32'>
        <img src={CoverIMG} className='object-cover w-full h-full' />
      </div>
      <Profile />

      <div className='mt-12 px-32'>
        <h3 className='text-green text-2xl font-medium mb-8'>
          Shop and Posts{' '}
        </h3>

        <div className='grid grid-cols-3 gap-x-12 gap-y-10 mb-10'>
          {Array(5)
            .fill(1)
            .map((_, i) => (
              <Card />
            ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerProfile;
