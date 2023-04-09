import Colors from './Colors';
import { BiMinus } from 'react-icons/bi';
import { RiAddFill } from 'react-icons/ri';
import { Button } from '../../../components/ui';

const ProductDetails = () => {
  return (
    <div>
      <div>
        <h2 className='text-green font-semibold text-2xl mb-1'>
          Orange and Brown Leather Chair{' '}
        </h2>
        <div className='flex items-center gap-x-3'>
          <p className='text-xl text-red font-semibold'>$1,139.99</p>
          <p className='line-through font-semibold text-[#1A1A1A]'>$1,190.99</p>
        </div>

        <div className='mt-2'>
          <p className='text-grey font-medium'>Brand:</p>
        </div>

        <div className='mt-3'>
          <p className='text-grey font-medium'>Colour:</p>
          <Colors />
        </div>

        <div className='mt-3 flex items-center  justify-between'>
          <div className='flex items-center border border-green rounded py-2 px-3 w-max cursor-pointer'>
            <p className='mr-2'>Size:</p>
            <p>Default</p>
          </div>

          <div className='flex items-center border border-green rounded py-2 px-3 w-max gap-x-2'>
            <BiMinus size='1.1rem' className='cursor-pointer' />1
            <RiAddFill size='1.1rem' className='cursor-pointer' />
          </div>

          <Button className='w-max px-7 py-2.5'>Add to cart</Button>
        </div>
      </div>
      <div className='mt-5'>
        <h4 className='font-semibold text-xl'>Description</h4>
        <ul className='font-medium mt-1'>
          <li>Overall Dimensions: 29.5”W x 27.6”D x 42.9”H</li>
          <li>Seat Height: 17.7” (450mm)</li>
          <li>Weight Capacity: 331 lb./150kg</li>
          <li>Color: Orange & Black Finsh: Black</li>
          <li>Upholsetery Materials: PU Leather</li>
          <li>Seat Fill Material: Foam</li>
          <li>Leg Material: Metal</li>
          <li>Number of Pieces: 1</li>
          <li>Assembly Required: Yes</li>
          <li>
            Product Care: Wipe with a clean cloth and mild soap, when needed.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductDetails;
