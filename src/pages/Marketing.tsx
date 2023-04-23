import { Button } from '../components/ui';
import svg from '../assets/logo.svg';
import AuthenticatedLayout from '../layout/AuthenticatedLayout';
import Table from '../components/ui/Table/Table2';

const Marketing = () => {
  const data = [
    {
      name: 'Online Store Session',
      no: '0',
    },
    {
      name: 'Online Store Conversion Rate',
      no: '0',
    },
    {
      name: 'Average Order Value',
      no: '$0.00',
    },
    {
      name: 'Total Sales',
      no: '$0.00',
    },
    {
      name: 'Sales attributed to marketing',
      no: '$0.00',
    },
    {
      name: 'Order attributed to marketing',
      no: '$0.00',
    },
  ];

  const columns: any = [
    {
      name: 'Campaign',
      selector: (row: any) => row.id,
    },
    {
      name: 'Status',
      selector: (row: any) => row.img,
    },
    {
      name: 'CTR',
      selector: (row: any) => row.customer,
    },
    {
      name: 'Cost',
      selector: (row: any) => row.location,
    },
    {
      name: 'Sales',
      selector: (row: any) => row.vendor,
    },
    {
      name: 'Sessions',
      selector: (row: any) => row.total,
    },
  ];

  const dataT: any = [
    {
      campaign: 'Untitled',
      status: 'Draft',
      ctr: '0',
      cost: '-',
      sales: '$0.00',
      sessions: '0',
    },
    {
      campaign: 'Untitled',
      status: 'Draft',
      ctr: '0',
      cost: '-',
      sales: '$0.00',
      sessions: '0',
    },
    {
      campaign: 'Untitled',
      status: 'Draft',
      ctr: '0',
      cost: '-',
      sales: '$0.00',
      sessions: '0',
    },
  ];
  return (
    <AuthenticatedLayout topBar={true} className='pt-7 bg-[#2C2C2C]/[4%] h-max'>
      {/* Header */}
      <div className='flex items-center justify-between mb-5 px-7 mt-8'>
        <h1 className='text-2xl font-semibold'>{'Marketing'}</h1>
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

      {/* Video Section */}
      <div className='flex flex-row justify-between px-7'>
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
            Perferendis cupiditate quia nisi, praesentium odio expedita ducimus,
            sequi error eveniet fugiat quaerat eaque cumque quidem minus
            repudiandae eligendi laudantium nulla necessitatibus! Iure,
            voluptatum magnam non sint eaque asperiores consequuntur, odit vel
            molestias eligendi optio veritatis? Reiciendis nisi consequuntur
            veritatis perspiciatis doloribus!
          </p>
          <Button className='rounded-md text-black px-3 py-2 border border-[#16962B] mt-3 w-auto' type='secondary'>
            Explore E-mail Templates
          </Button>
        </div>
      </div>

      <div className='py-16 px-8 '>
        {/* Metrics */}
        <div className=' w-full gap-8 grid grid-cols-6'>
          {data.map((data: any, i: number) => {
            return (
              <div
                className='col-span-2 relative text-[#000] bg-white p-4 rounded-md font-semibold'
                key={i}>
                <h2 className='mb-3'>{data.name}</h2>
                <p className='text-[#A5A5A5] text-xl pb-14 border-b-green border-b'>
                  {data.no}
                </p>
                <p className='text-right text-green text-sm mt-2'>
                  View Report
                </p>
              </div>
            );
          })}
        </div>

        <p className='mt-10 text-grey font-semibold'>
          Recent Marketing Activities
        </p>
        <Table
          columns={columns}
          data={dataT}
          pageSize={10}
          pagination={false}
        />
      </div>

      {/*  */}
      <div className='px-8 mb-10'>
        <p className='mt-10 text-grey font-semibold'>Marketing Apps</p>
        <p className='my-5'>
          Increase sessions, engage shoppers, and promote products by adding
          more marketing apps.
        </p>
        <div className='flex flex-row'>
            <img src={svg} className='mr-4' alt="" />
          <div>
            <h5 className='text-[#16962B]'>Plazzar</h5>
            <p className='text-grey'>Reach shoppers and get discovered across Google.</p>
          </div>
        </div>
        <Button className='rounded-md text-black px-3 py-2 border border-[#16962B] mt-3 w-auto' type='secondary'>
          View more marketing apps
        </Button>
      </div>

      {/* Video Section 2  */}
      <div className='flex flex-row justify-between px-7'>
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
          <h2 className='mb-2 font-semibold'>How to advertise on Plazzar</h2>
          <p className='text-[#A5A5A5] w-[90%]'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Perferendis cupiditate quia nisi, praesentium odio expedita ducimus,
            sequi error eveniet fugiat quaerat eaque cumque quidem minus
            repudiandae eligendi laudantium nulla necessitatibus! Iure,
            voluptatum magnam non sint eaque asperiores consequuntur, odit vel
            molestias eligendi optio veritatis? Reiciendis nisi consequuntur
            veritatis perspiciatis doloribus!
          </p>
          <Button className='rounded-md text-black px-3 py-2 border border-[#16962B] mt-3 w-auto' type='secondary'>
            Learn more
          </Button>
        </div>
      </div>
    </AuthenticatedLayout>
  );
};

export default Marketing;
