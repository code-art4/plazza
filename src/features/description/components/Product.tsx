import Chair1Lg from '../../../assets/image/chair-1-large.png';
import { Button, TextArea } from '../../../components/ui';

const Product = () => {
  return (
    <div className='w-[55%]'>
      <div className='w-full'>
        <img src={Chair1Lg} className='w-full h-[35rem]' />
      </div>

      <div className='mt-4'>
        <TextArea label='comment' placeholder='Add comment...' />

        <div className='mt-4 flex items-start'>
          <p className='mr-auto text-green font-medium'>View Comments</p>
          <Button className='w-max px-7'>Comment</Button>
        </div>
      </div>
    </div>
  );
};

export default Product;
