import CustomerProfileIMG from '../../../assets/image/customer-profile-img.png';
import Check from '../../../assets/check.svg';
import Location from '../../../assets/location.svg';

const Profile = () => {
  return (
    <div className='px-32 flex items-center justify-between'>
      <div className='flex flex-col items-center w-[30%]'>
        <div className='-mt-12'>
          <img src={CustomerProfileIMG} />
        </div>

        <div className='flex items-center gap-x-16 mt-2 bg-white shadow-lg px-8 py-5 rounded-lg text-center'>
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
      </div>

      <div className='w-[65%] mt-4'>
        <div>
          <div className='flex items-center justify-start'>
            <div className='font-medium'>
              <h2 className='text-2xl font-semibold flex items-center gap-x-2'>
                Nike
                <img src={Check} className='w-5 h-5' />
              </h2>
              <p className='text-[#888888]'>Manufacturer</p>
              <div className='mt-2 flex flex-col gap-y-1'>
                <p>Spotlighting athlete</p>
                <p>#BlackLivesMatter and #StopAsianHate linkin.bio/nike</p>
                <p className='text-green'>linkin.bio/nike</p>
              </div>
              <p className='flex items-center gap-x-2 mt-3'>
                <img src={Location} />
                One Bowerman Dr, Beaverton, Oregon
              </p>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
