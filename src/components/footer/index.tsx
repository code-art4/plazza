import {
  RiTwitterFill,
  RiLinkedinBoxFill,
  RiFacebookCircleFill,
} from 'react-icons/ri';
import { Button, Input } from '../ui';

const Footer = () => {
  return (
    <div className='my-7 px-32'>
      <div className='flex items-center justify-between'>
        <div className='w-[7rem]'>
          <div className='w-full h-[5rem] bg-[#D9D9D9]'></div>
          <div className='flex items-end justify-between mt-3 w-full'>
            <RiFacebookCircleFill size='1.4rem' />
            <RiTwitterFill size='1.4rem' />
            <RiLinkedinBoxFill size='1.4rem' />
          </div>
        </div>
        <div className='w-[30%]'>
          <p className='font-medium'>New to Plazzar?</p>
          <p className='text-grey'>Subscribe to our news letter</p>
          <div className='flex items-center gap-x-4 mt-2'>
            <Input
              placeholder='Enter email address'
              type='email'
              id='email'
              name='search'
              className=''
            />
            <Button className='w-max px-6'>Subscribe</Button>
          </div>
        </div>
      </div>
      <nav className='w-full mt-6'>
        <ul className='flex items-center justify-between'>
          <li>About Plazzar</li>
          <li>Logistics</li>
          <li>Customer care</li>
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
          <li>Security</li>
          <li>Support Center</li>
        </ul>
      </nav>

      <p className='flex items-center justify-center mt-7 text-green border-t border-t-green pt-4'>
        2022 <p>.All Right Reserved</p>
      </p>
    </div>
  );
};

export default Footer;
