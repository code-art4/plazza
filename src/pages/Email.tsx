import { Button } from '../components/ui';
import tempBg from '../assets/emails.svg';
import AuthenticatedLayout from '../layout/AuthenticatedLayout';

const Email = () => {
  return (
    <AuthenticatedLayout topBar={true} className='pt-7 bg-[#2C2C2C]/[4%] h-max'>
      <div className='flex items-center justify-between mb-5 px-7 mt-8'>
        <h1 className='text-2xl font-semibold'>{'Emails'}</h1>
        <div className='flex gap-x-3'>
          <Button
            className='flex items-center w-max px-5 gap-x-2 bg-[transparent] py-3'
            type='secondary'>
            Last 30 days
          </Button>
          <Button
            className='flex items-center w-max px-5 gap-x-2 bg-[#16962B] py-3'
            type='primary'>
            Create Campaign
          </Button>
        </div>
      </div>
      <div className=' pb-8 px-8 rounded-lg'>
        <p className='text-[#A5A5A5] mb-3 font-semibold'>
          Get started with a pre-built template
        </p>
        <div className='flex flex-row justify-between'>
          <div className='w-[30%]'>
            <video controls className='w-full h-full'>
              <source src='/media/cc0-videos/flower.webm' type='video/webm' />
              <source src='/media/cc0-videos/flower.mp4' type='video/mp4' />
              Download the
              <a href='/media/cc0-videos/flower.webm'>WEBM</a>
              or
              <a href='/media/cc0-videos/flower.mp4'>MP4</a>
              video.
            </video>
          </div>
          <div className='w-[65%]'>
            <h2 className='mb-2 font-semibold'>E-mail Marketing on Plazzar</h2>
            <p className='text-[#A5A5A5] w-[90%]'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Perferendis cupiditate quia nisi, praesentium odio expedita
              ducimus, sequi error eveniet fugiat quaerat eaque cumque quidem
              minus repudiandae eligendi laudantium nulla necessitatibus! Iure,
              voluptatum magnam non sint eaque asperiores consequuntur, odit vel
              molestias eligendi optio veritatis? Reiciendis nisi consequuntur
              veritatis perspiciatis doloribus!
            </p>
            <Button className='rounded-md text-black px-3 py-2 border border-[#16962B] mt-3 w-auto'>
              Learn more
            </Button>
          </div>
        </div>

        <div>
          <p className='text-[#A5A5A5] my-5'>Branded template</p>
          <div className=' w-full justify-start gap-8 grid grid-cols-8'>
            {Array(8)
              .fill(0)
              .map((_, i) => (
                <div key={i} className='col-span-2 relative'>
                  <img key={i} src={tempBg} className='col-span-2 w-full ' />{' '}
                  <Button className='flex items-center px-5 gap-x-2 bg-[#fff] py-3 absolute bottom-0 w-full border border-[#16962B] text-[#000] justify-center rounded-t-none'>
                    Lorem Ipsum
                  </Button>
                </div>
              ))}
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
};

export default Email;
