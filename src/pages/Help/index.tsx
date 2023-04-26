import { Input } from '../../components/ui';
import HelpLayout from './../../features/help/index';
import Cart from '../../assets/cart.svg';
import Order from '../../assets/order.svg';
import CancelOrder from '../../assets/cancel-order.svg';
import ReturnRefunds from '../../assets/return.svg';
import Payment from '../../assets/payment.svg';
import { useNavigate } from 'react-router-dom';

const Help = () => {
  const navigate = useNavigate();
  return (
    <HelpLayout>
      <div className='mt-12 mx-32 text-center'>
        <h4 className='font-medium text-lg'>How can we help you?</h4>
        <div className='w-[40rem] mx-auto mt-3'>
          <Input
            type='text'
            placeholder='Describe your issue'
            id='issue'
            name='issue'
            className='text-green border border-green outline-none'
          />
        </div>
        <div className='flex items-center justify-between w-[70%] mx-auto my-24 font-medium text-grey'>
          <div
            className='flex flex-col items-center justify-center w-[10rem] cursor-pointer'
            onClick={() => navigate('/help/place-order')}
          >
            <img src={Cart} className='w-[5rem] h-[5rem]' />
            <span>Place Order</span>
          </div>
          <div
            className='flex flex-col items-center justify-center w-[10rem]'
            onClick={() => navigate('/track-order')}
          >
            <img src={Order} className='w-[5rem] h-[5rem]' />
            <span>Track Order</span>
          </div>
          <div
            className='flex flex-col items-center justify-center w-[10rem]'
            onClick={() => navigate('/order-cancel')}
          >
            <img src={CancelOrder} className='w-[5rem] h-[5rem]' />
            <span>Order Cancellation</span>
          </div>
          <div
            className='flex flex-col items-center justify-center w-[10rem]'
            onClick={() => navigate('/return-refunds')}
          >
            <img src={ReturnRefunds} className='w-[5rem] h-[5rem]' />
            <span>Return & Refunds </span>
          </div>
          <div
            className='flex flex-col items-center justify-center w-[10rem]'
            onClick={() => navigate('/payments')}
          >
            <img src={Payment} className='w-[5rem] h-[5rem]' />
            <span>Payments</span>
          </div>
        </div>
      </div>
    </HelpLayout>
  );
};

export default Help;
