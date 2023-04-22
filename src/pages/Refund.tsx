import Order1 from '../assets/image/order-1.png';
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
    name: 'Quantity Refunded',
    selector: (row: any) => row.qualityRefund,
  },
  {
    name: 'Customer Name',
    selector: (row: any) => row.customer,
  },
  {
    name: 'Refund Date',
    selector: (row: any) => row.refundDate,
  },
  {
    name: 'Refund',
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
    qualityRefund: 1,
    customer: 'Jeremy Lynch',
    refundDate: ['04-10-22', '03:45:06'],
    Refund: '$875',
    status: 'Delivered',
  },
  {
    id: '#719261',
    img: <img src={Order1} />,
    qualityRefund: 1,
    customer: 'Jeremy Lynch',
    refundDate: ['04-10-22', '03:45:06'],
    Refund: '$875',
    status: 'Delivered',
  },
  {
    id: '#719261',
    img: <img src={Order1} />,
    qualityRefund: 1,
    customer: 'Jeremy Lynch',
    refundDate: ['04-10-22', '03:45:06'],
    Refund: '$875',
    status: 'Delivered',
  },
  {
    id: '#719261',
    img: <img src={Order1} />,
    qualityRefund: 1,
    customer: 'Jeremy Lynch',
    refundDate: ['04-10-22', '03:45:06'],
    Refund: '$875',
    status: 'Delivered',
  },
  {
    id: '#719261',
    img: <img src={Order1} />,
    qualityRefund: 1,
    customer: 'Jeremy Lynch',
    refundDate: ['04-10-22', '03:45:06'],
    Refund: '$875',
    status: 'Delivered',
  },
  {
    id: '#719261',
    img: <img src={Order1} />,
    qualityRefund: 1,
    customer: 'Jeremy Lynch',
    refundDate: ['04-10-22', '03:45:06'],
    Refund: '$875',
    status: 'Delivered',
  },
];

const Refund = () => {
  return (
    <FeaturesTable
      columns={columns}
      data={data}
      title='Refunds'
      subtitle='Recent Refunds'
    />
  );
};

export default Refund;
