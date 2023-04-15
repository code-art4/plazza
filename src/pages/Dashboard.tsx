import React from 'react';
import { BiCaretUp } from 'react-icons/bi';
import { Chart } from 'react-charts';
import AuthenticatedLayout from '../layout/AuthenticatedLayout';
import GreenChart from '../assets/image/green-chart.png';
import RedChart from '../assets/image/red-chart.png';
import BarChart from '../features/chart/BarChart';
import PieChart from '../features/chart/PieChart';
import Table from '../features/Table';

const columns = [
    {
        name: '#Order ID',
        selector: row => row.id,
    },
    {
        name: 'Date',
        selector: row => row.date,
    },
    {
        name: 'Customer Name',
        selector: row => row.customer.name,
    },
    {
        name: 'Location',
        selector: row => row.location,
    },
    {
        name: 'Tracking',
        selector: row => row.tracking,
    },
    {
        name: 'Item',
        selector: row => row.item,
    },
    {
        name: 'Amount',
        selector: row => row.amount,
    },
    {
        name: 'Status',
        selector: row => row.status,
    },
];

const data = [
    {
        id: '#719261',
        date: '13 Apr 2022',
        customer: {
          name: 'Cameron Easton'
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
          name: 'Cameron Easton'
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
          name: 'Cameron Easton'
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
          name: 'Cameron Easton'
        },
        location: 'Lagos, Nigeria',
        tracking: 'GUHYIF12',
        item: 'Macbook Pro',
        amount: '$875',
        status: 'Delivered',
    },
]

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
            fontSize: '16px',
            fontWeight: '500'
        },
    },
    cells: {
        style: {
            paddingLeft: '8px', // override the cell padding for data cells
            paddingRight: '8px',
            fontSize: '14px'
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
                <img src={GreenChart} className='w-32 h-20' />
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
                <img src={GreenChart} className='w-32 h-20' />
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
                <img src={RedChart} className='w-32 h-20 oject-cover' />
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
                <img src={GreenChart} className='w-32 h-20' />
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
          <BarChart />
          </div>
          <div className='w-[30%] px-5 mx-auto'>
          <PieChart />
          </div>
        </div>

        <div className='mt-12'>
          <p className='font-semibold text-grey mb-1'>Recent Orders</p>
          <Table data={data} columns={columns} customStyles={customStyles}/>
          </div>
      </div>
    </AuthenticatedLayout>
  );
};

export default Dashboard;
