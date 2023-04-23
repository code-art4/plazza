import { Button } from '../components/ui';
import paperplane from '../assets/paperplane.svg';
import AuthenticatedLayout from '../layout/AuthenticatedLayout';
import Table from '../components/ui/Table/Table2';

const Campaign = () => {
  const data = [
    {
      name: 'Sessions',
      no: '0',
    },
    {
      name: 'Orders',
      no: '0',
    },
    {
      name: 'Sales',
      no: '$0.00',
    },
    {
      name: 'Cost',
      no: '$0.00',
    },
  ];

  const columns:any = [
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
    }
  ];

  const dataT:any = [
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
      <div className='flex items-center justify-between mb-5 px-7 mt-8'>
        <h1 className='text-2xl font-semibold'>{'Campaign'}</h1>
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
          Reults from campaign
        </p>
        <div className='flex flex-row justify-between mb-10'>
          <div className='w-[85%]'>
            <h2 className='mb-2 font-semibold'>
              Boost your marketing with Plazzar Email
            </h2>
            <p className='text-[#A5A5A5] w-[90%]'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Perferendis cupiditate quia nisi, praesentium odio expedita
              ducimus, sequi error eveniet fugiat quaerat eaque cumque quidem
              minus repudiandae eligendi laudantium nulla necessitatibus! Iure,
              voluptatum magnam non sint eaque asperiores consequuntur, odit vel
              molestias eligendi optio veritatis? Reiciendis nisi consequuntur
              veritatis perspiciatis doloribus!
            </p>
            <Button className='rounded-md text-black px-3 py-2 border border-[#16962B] mt-3 w-auto text-[#000] bg-[transparent]'>
              Create Email
            </Button>
          </div>
          <div className='w-[15%]'>
            <img
              src={paperplane}
              className='w-[80%] h-[80%] mx-auto -ml-10'
              alt=''
            />
          </div>
        </div>

        <div className=' w-full gap-8 grid grid-cols-8'>
          {data.map((data: any, i: number) => {
            return (
              <div
                className='col-span-2 relative text-[#000] bg-white p-4 rounded-md font-semibold'
                key={i}>
                <h2 className='mb-3'>{data.name}</h2>
                <p className='text-[#A5A5A5] text-lg'>{data.no}</p>
              </div>
            );
          })}
        </div>

        <Table columns={columns} data={dataT} pageSize={10} pagination={false} />
      </div>
    </AuthenticatedLayout>
  );
};

export default Campaign;
