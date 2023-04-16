import React from 'react';
import { BiCaretUp } from 'react-icons/bi';
import { Chart } from 'react-charts';
import AuthenticatedLayout from '../layout/AuthenticatedLayout';
import GreenChart from '../assets/image/green-chart.png';
import RedChart from '../assets/image/red-chart.png';
import BarChart from '../features/chart/BarChart';
import PieChart from '../features/chart/PieChart';
import Table from '../components/ui/Table';
import ColumnChart from '../features/chart/ColumnChart';
import RadialChart from '../features/chart/RadialChart';
import BarChart2 from '../features/chart/BarChart2';
import BarChart1 from '../features/chart/BarChart1';
import BarChart3 from '../features/chart/BarChart3';
import BarChart4 from '../features/chart/BarChart4';
//import Table from '../features/Table';

const columns = [
  {
    name: '#Order ID',
    selector: (row: any) => row.id,
  },
  {
    name: 'Date',
    selector: (row: any) => row.date,
  },
  {
    name: 'Customer Name',
    selector: (row: any) => row.customer.name,
  },
  {
    name: 'Location',
    selector: (row: any) => row.location,
  },
  {
    name: 'Tracking',
    selector: (row: any) => row.tracking,
  },
  {
    name: 'Item',
    selector: (row: any) => row.item,
  },
  {
    name: 'Amount',
    selector: (row: any) => row.amount,
  },
  {
    name: 'Status',
    selector: (row: any) => row.status,
  },
];

const data = [
  {
    id: '#719261',
    date: '13 Apr 2022',
    customer: {
      name: 'Cameron Easton',
    },
    location: 'Lagos, Nigeria',
    tracking: 'GUHYIF12',
    item: 'Macbook Pro',
    amount: '$875',
    status: 'Delivered',
  },
  {
    id: '#719261',
    date: '13 Apr 2022',
    customer: {
      name: 'Cameron Easton',
    },
    location: 'Lagos, Nigeria',
    tracking: 'GUHYIF12',
    item: 'Macbook Pro',
    amount: '$875',
    status: 'Delivered',
  },
  {
    id: '#719261',
    date: '13 Apr 2022',
    customer: {
      name: 'Cameron Easton',
    },
    location: 'Lagos, Nigeria',
    tracking: 'GUHYIF12',
    item: 'Macbook Pro',
    amount: '$875',
    status: 'Pending',
  },
  {
    id: '#719261',
    date: '13 Apr 2022',
    customer: {
      name: 'Cameron Easton',
    },
    location: 'Lagos, Nigeria',
    tracking: 'GUHYIF12',
    item: 'Macbook Pro',
    amount: '$875',
    status: 'Cancelled',
  },
];

const customStyles = {
  rows: {
    style: {
      minHeight: '72px', // override the row height
    },
  },
  headCells: {
    style: {
      paddingLeft: '8px', // override the cell padding for head cells
      paddingRight: '8px',
      color: 'green',
      fontSize: '15px',
      fontWeight: '500',
    },
  },
  cells: {
    style: {
      paddingLeft: '8px', // override the cell padding for data cells
      paddingRight: '8px',
      fontSize: '14px',
    },
  },
};

const Dashboard = () => {
  return (
    <AuthenticatedLayout topBar={true}>
      <div className='px-6 mt-28'>
        <h2 className='text-xl font-medium mb-4'>Overview</h2>

        <div className='flex items-center justify-between gap-x-10'>
          <div className='shadow py-6 px-10 w-[25%]'>
            <p className='text-grey'>Total sales</p>
            <div>
              <div className='flex items-center'>
                <p className='font-semibold text-lg mt-1.5 mr-4'>$450K</p>
                <div className='w-24 h-20'>
                  <BarChart1 />
                </div>
              </div>

              <div className='mt-6 flex items-center gap-x-1'>
                <BiCaretUp color='green' />
                <p className='text-green font-medium'>+45%</p>
                <p>this week</p>
              </div>
            </div>
          </div>

          <div className='shadow py-6 px-10 w-[25%]'>
            <p className='text-grey'>Total items</p>
            <div>
              <div className='flex items-center'>
                <p className='font-semibold text-lg mt-1.5 mr-4'>1500</p>
                <div className='w-24 h-20'>
                  <BarChart2  />
                </div>
              </div>
              <div className='mt-6 flex items-center gap-x-1'>
                <BiCaretUp color='green' />
                <p className='text-green font-medium'>+45%</p>
                <p>this week</p>
              </div>
            </div>
          </div>

          <div className='shadow py-6 px-10 w-[25%]'>
            <p className='text-grey'>Average sales</p>
            <div>
              <div className='flex items-center'>
                <p className='font-semibold text-lg mt-1.5 mr-4'>2.00M</p>
                <div className='w-24 h-20'>
                  <BarChart3 />
                </div>
              </div>
              <div className='mt-6 flex items-center gap-x-1'>
                <BiCaretUp color='red' />
                <p className='text-red font-medium'>-15%</p>
                <p>this week</p>
              </div>
            </div>
          </div>

          <div className='shadow py-6 px-10 w-[25%]'>
            <p className='text-grey'>Orders delivered </p>
            <div>
              <div className='flex items-center'>
                <p className='font-semibold text-lg mt-1.5 mr-4'>20.48%</p>
                <div className='w-24 h-20'>
                  <BarChart4 />
                </div>
              </div>
              <div>
                <BiCaretUp color='green' />
                <p className='text-green font-medium'>+45%</p>
                <p>this week</p>
              </div>
            </div>
          </div>
        </div>

        <div className='flex items-center mt-10'>
          <div className='w-1/2'>
            <ColumnChart />
          </div>
          <div className='w-[30%] px-5 mx-auto'>
            <RadialChart />
          </div>
        </div>

        <div className='mt-12'>
          <p className='font-semibold text-grey mb-2'>Recent Orders</p>
          {/* <Table data={data} columns={columns} customStyles={customStyles} /> */}
          <Table
            pageSize={10}
            data={data}
            columns={columns}
            columnColor={'text-[#16962B]'}
            pagination={true}
          />
        </div>
      </div>
    </AuthenticatedLayout>
  );
};

export default Dashboard;
