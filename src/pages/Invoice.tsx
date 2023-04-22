import Order1 from '../assets/image/order-1.png';
import { Button } from '../components/ui';
import { RxDownload } from 'react-icons/rx';
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
    name: 'Total Quantity',
    selector: (row: any) => row.totalQuantity,
  },
  {
    name: 'Customer Name',
    selector: (row: any) => row.customer,
  },
  {
    name: 'Invoice Date',
    selector: (row: any) => row.invoiceDate,
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
    totalQuantity: 1,
    customer: 'Jeremy Lynch',
    invoiceDate: ['04-10-22', '03:45:06'],
    grandTotal: '$875',
    status: 'Delivered',
  },
  {
    id: '#719261',
    img: <img src={Order1} />,
    totalQuantity: 1,
    customer: 'Jeremy Lynch',
    invoiceDate: ['04-10-22', '03:45:06'],
    grandTotal: '$875',
    status: 'Delivered',
  },
  {
    id: '#719261',
    img: <img src={Order1} />,
    totalQuantity: 1,
    customer: 'Jeremy Lynch',
    invoiceDate: ['04-10-22', '03:45:06'],
    grandTotal: '$875',
    status: 'Delivered',
  },
  {
    id: '#719261',
    img: <img src={Order1} />,
    totalQuantity: 1,
    customer: 'Jeremy Lynch',
    invoiceDate: ['04-10-22', '03:45:06'],
    grandTotal: '$875',
    status: 'Delivered',
  },
  {
    id: '#719261',
    img: <img src={Order1} />,
    totalQuantity: 1,
    customer: 'Jeremy Lynch',
    invoiceDate: ['04-10-22', '03:45:06'],
    grandTotal: '$875',
    status: 'Delivered',
  },
  {
    id: '#719261',
    img: <img src={Order1} />,
    totalQuantity: 1,
    customer: 'Jeremy Lynch',
    invoiceDate: ['04-10-22', '03:45:06'],
    grandTotal: '$875',
    status: 'Delivered',
  },
];

const Invoice = () => {
  return (
    <FeaturesTable
      columns={columns}
      data={data}
      title='Shipment'
      subtitle='Recent Shipments'
      button={
        <Button className='flex items-center justify-between w-max py-3 px-5 gap-x-3'>
          Download Invoice <RxDownload size='17px' />{' '}
        </Button>
      }
    />
  );
};

export default Invoice;
