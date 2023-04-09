import Chair1 from '../../../assets/image/chair-1.png';
import Chair2 from '../../../assets/image/chair-2.png';
import Chair3 from '../../../assets/image/chair-3.png';
import Chair4 from '../../../assets/image/chair-4.png';

const SideImage = () => {
  return (
    <div className='grid gap-y-5'>
      <img src={Chair1} className='w-[17rem] h-auto object-cover' />
      <img src={Chair2} className='w-[17rem] h-auto object-cover' />
      <img src={Chair3} className='w-[17rem] h-auto object-cover' />
      <img src={Chair4} className='w-[17rem] h-auto object-cover' />
    </div>
  );
};

export default SideImage;
