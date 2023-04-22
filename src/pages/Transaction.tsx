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
    name: 'Quantity',
    selector: (row: any) => row.quality,
  },
  {
    name: 'Transaction ID',
    selector: (row: any) => row.transactionID,
  },
  {
    name: 'Transaction Date',
    selector: (row: any) => row.transactionDate,
  },
  {
    name: 'Amount',
    selector: (row: any) => row.amount,
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
    transactionID: 'fjksdnfvkjjjjjibaesdkhad',
    transactionDate: ['04-10-22', '03:45:06'],
    amount: '$875',
    status: 'Delivered',
  },
  {
    id: '#719261',
    img: <img src={Order1} />,
    qualityRefund: 1,
    transactionID: 'fjksdnfvkjjjjjibaesdkhad',
    transactionDate: ['04-10-22', '03:45:06'],
    amount: '$875',
    status: 'Delivered',
  },
  {
    id: '#719261',
    img: <img src={Order1} />,
    qualityRefund: 1,
    transactionID: 'fjksdnfvkjjjjjibaesdkhad',
    transactionDate: ['04-10-22', '03:45:06'],
    amount: '$875',
    status: 'Delivered',
  },
  {
    id: '#719261',
    img: <img src={Order1} />,
    qualityRefund: 1,
    transactionID: 'fjksdnfvkjjjjjibaesdkhad',
    transactionDate: ['04-10-22', '03:45:06'],
    amount: '$875',
    status: 'Delivered',
  },
  {
    id: '#719261',
    img: <img src={Order1} />,
    qualityRefund: 1,
    transactionID: 'fjksdnfvkjjjjjibaesdkhad',
    transactionDate: ['04-10-22', '03:45:06'],
    amount: '$875',
    status: 'Delivered',
  },
  {
    id: '#719261',
    img: <img src={Order1} />,
    qualityRefund: 1,
    transactionID: 'fjksdnfvkjjjjjibaesdkhad',
    transactionDate: ['04-10-22', '03:45:06'],
    amount: '$875',
    status: 'Delivered',
  },
];

const Transaction = () => {
  return (
    <FeaturesTable
      columns={columns}
      data={data}
      title='Transactions'
      subtitle='Recent Transactions'
    />
  );
};

export default Transaction;
