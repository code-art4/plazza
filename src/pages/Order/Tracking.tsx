import Cards from '../../features/orders/cards';
import { FaBicycle, FaRegComment } from 'react-icons/fa';
import { AiOutlineClockCircle } from 'react-icons/ai';
import Map from '../../features/map';
import AuthenticatedLayout from '../../layout/AuthenticatedLayout';
import CustomerProfile from '../../assets/image/blue-tyga.png';
import Order1 from '../../assets/image/blue-tyga-item-1.png';
import Order2 from '../../assets/image/blue-tyga-item-2.png';
import Order3 from '../../assets/image/blue-tyga-item-3.png';
import Order4 from '../../assets/image/blue-tyga-item-4.png';

const cardItems = [
  {
    img: Order1,
    name: 'Blue Tyga',
    cat: 'Hoodie',
    available: 3,
    price: '29.99',
  },
  {
    img: Order2,
    name: 'Blue Tyga',
    cat: 'T-shirt',
    available: 3,
    price: '19.99',
  },
  {
    img: Order3,
    name: 'Blue Tyga',
    cat: 'Hoodie',
    available: 3,
    price: '24.99',
  },
  {
    img: Order4,
    name: 'Blue Tyga',
    cat: 'Sweater',
    available: 3,
    price: '29.99',
  },
];

const Tracking = () => {
  return (
    <AuthenticatedLayout topBar={true} className='pt-7 bg-[#2C2C2C]/[4%] px-6'>
      <div className='flex items-center justify-between mb-8 px-7 mt-8'>
        <h1 className='text-2xl font-semibold'>Track Orders</h1>
      </div>
      <div className='flex gap-x-12'>
        <div className='mx-8 w-[30%]'>
          <h2 className='text-lg font-medium mb-7'>Items for Delivery</h2>
          <Cards items={cardItems} />
          <div className='mt-5'>
            <span className='flex items-center justify-between'>
              <h3 className='font-semibold text-lg'>Total</h3>
              <p className='font-medium text-green'>$164.94</p>
            </span>
            <div className='mt-5'>
              <div className='flex gap-x-4 items-center mb-3 text-grey'>
                <div className='bg-[#E8F8EB] p-3 rounded'>
                  <FaBicycle color='16962B' size='17px' />
                </div>
                <p>On my way</p>
              </div>
              <div className='flex gap-x-4 items-center text-grey'>
                <div className='bg-[#E8F8EB] p-3 rounded'>
                  <AiOutlineClockCircle color='16962B' size='17px' />
                </div>
                <p>28 minutes</p>
              </div>
            </div>
          </div>
        </div>
        <div className='w-[67%] ml-auto relative'>
          <Map />
          <div className='absolute bottom-20 z-[999] bg-white right-10 py-4 px-6 rounded-lg w-max'>
            <div className='flex items-center'>
              <div className='relative'>
                <img src={CustomerProfile} className='w-12 h-12 object-cover' />
                <span className='w-2 h-2 rounded-full absolute bg-green bottom-0 right-1'></span>
              </div>
              <h3 className='mx-3'>Blue Tyga</h3>
              <div className='flex items-center text-grey ml-auto'>
                <div className='bg-[#E8F8EB] p-3 rounded'>
                  <FaRegComment color='16962B' size='17px' />
                </div>
              </div>
            </div>
            <p className='text-grey mt-4 w-[22rem]'>
              Hello, I’m on my way , Your delivery code is{' '}
              <span className='text-green'>12345</span>. Please do not share.
            </p>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
};

export default Tracking;
