import CoverPic from '../../../assets/image/vendor-profile-sm.png';
import CustomerProfileIMG from '../../../assets/image/customer-profile-img.png';
import Check from '../../../assets/check.svg';
import Location from '../../../assets/location.svg';
import { Button } from '../../../components/ui';

const Profile = () => {
  return (
    <div className='fixed top-[13%] left-[8rem] w-[23%]'>
      <img src={CoverPic} className='w-full object-cover h-[5.3rem]' />

      <div>
        <div className='flex flex-col items-center justify-center'>
          <div className='-mt-5'>
            <img src={CustomerProfileIMG} className='w-16 h-16' />
          </div>
          <div className='font-medium w-max mx-auto'>
            <h2 className='text-xl font-semibold flex items-center gap-x-2 w-max mx-auto'>
              Nike
              <img src={Check} className='w-4 h-4' />
            </h2>
            <p className='text-[#888888]'>Manufacturer</p>
          </div>
        </div>

        <div className='flex justify-between items-center gap-x-16 mt-2 bg-white shadow-lg px-8 py-5 rounded-lg text-center mx-3'>
          <div>
            <div className='mb-4'>
              <p className='font-medium'>Followers</p>
              <p className='text-grey'>10k</p>
            </div>
            <div>
              <p className='font-medium'>Posts</p>
              <p className='text-grey'>800</p>
            </div>
          </div>
          <div>
            <div className='mb-4'>
              <p className='font-medium'>Following</p>
              <p className='text-grey'>1k</p>
            </div>
            <div>
              <p className='font-medium'>Feeds</p>
              <p className='text-grey'>1k</p>
            </div>
          </div>
        </div>

        <div className='font-medium mx-3 mt-6'>
          <div className='mt-2 flex flex-col gap-y-1'>
            <p>Spotlighting athlete</p>
            <p>#BlackLivesMatter and #StopAsianHate</p>
            <p className='text-green'>linkin.bio/nike</p>
          </div>
          <p className='flex items-center gap-x-2 mt-3'>
            <img src={Location} className='w-4 h-4' />
            One Bowerman Dr, Beaverton, Oregon
          </p>
        </div>
      </div>

      <Button className='mt-5'>Edit Profile</Button>
    </div>
  );
};

export default Profile;
