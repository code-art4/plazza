import Order1 from '../assets/image/order-1.png';
import { Button } from '../components/ui';
import FeaturesTable from '../features/Table';

const columns = [
  {
    name: '#Order ID',
    selector: (row: any) => row.id,
  },
  {
    name: 'Image',
    selector: (row: any) => row.img,
  },
  {
    name: 'Quantity',
    selector: (row: any) => row.quality,
  },
  {
    name: 'Customer Name',
    selector: (row: any) => row.customer,
  },
  {
    name: 'Booking Date',
    selector: (row: any) => row.bookingDate,
  },
  {
    name: 'Grand Total',
    selector: (row: any) => row.grandTotal,
  },
  {
    name: 'Status',
    selector: (row: any) => row.status,
  },
  {
    name: 'Info',
    selector: (row: any) => row.info,
  },
];

const data = [
  {
    id: '#719261',
    img: <img src={Order1} />,
    quality: 1,
    customer: 'Jeremy Lynch',
    bookingDate: ['04-10-22', '03:45:06'],
    grandTotal: '$875',
    status: 'Delivered',
  },
  {
    id: '#719261',
    img: <img src={Order1} />,
    quality: 1,
    customer: 'Jeremy Lynch',
    bookingDate: ['04-10-22', '03:45:06'],
    grandTotal: '$875',
    status: 'Delivered',
  },
  {
    id: '#719261',
    img: <img src={Order1} />,
    quality: 1,
    customer: 'Jeremy Lynch',
    bookingDate: ['04-10-22', '03:45:06'],
    grandTotal: '$875',
    status: 'Delivered',
  },
  {
    id: '#719261',
    img: <img src={Order1} />,
    quality: 1,
    customer: 'Jeremy Lynch',
    bookingDate: ['04-10-22', '03:45:06'],
    grandTotal: '$875',
    status: 'Delivered',
  },
  {
    id: '#719261',
    img: <img src={Order1} />,
    quality: 1,
    customer: 'Jeremy Lynch',
    bookingDate: ['04-10-22', '03:45:06'],
    grandTotal: '$875',
    status: 'Delivered',
  },
  {
    id: '#719261',
    img: <img src={Order1} />,
    quality: 1,
    customer: 'Jeremy Lynch',
    bookingDate: ['04-10-22', '03:45:06'],
    grandTotal: '$875',
    status: 'Delivered',
  },
];

const Booking = () => {
  return (
    <FeaturesTable
      columns={columns}
      data={data}
      title='Booking'
      subtitle='Recent Bookings'
      button={<Button className='px-5'>Refund</Button>}
    />
  );
};

export default Booking;
