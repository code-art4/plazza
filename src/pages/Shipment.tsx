import Table from './../components/ui/Table/Table2';
import Order1 from '../assets/image/order-1.png';
import AuthenticatedLayout from '../layout/AuthenticatedLayout';
import { Button } from '../components/ui';
import { RxCaretDown } from 'react-icons/rx';
import FeaturesTable from '../features/table';

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
    name: 'Shipping To',
    selector: (row: any) => row.ship,
  },
  {
    name: 'Order Date',
    selector: (row: any) => row.orderDate,
  },
  {
    name: 'Shipment Date',
    selector: (row: any) => row.shipmentDate,
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
    ship: 'Lagos, Nigeria',
    orderDate: ['04-10-22', '03:45:06'],
    shipmentDate: ['04-10-22', '03:45:06'],
    status: 'Delivered',
  },
  {
    id: '#719261',
    img: <img src={Order1} />,
    totalQuantity: 1,
    ship: 'Lagos, Nigeria',
    orderDate: ['04-10-22', '03:45:06'],
    shipmentDate: ['04-10-22', '03:45:06'],
    status: 'Delivered',
  },
  {
    id: '#719261',
    img: <img src={Order1} />,
    totalQuantity: 1,
    ship: 'Lagos, Nigeria',
    orderDate: ['04-10-22', '03:45:06'],
    shipmentDate: ['04-10-22', '03:45:06'],
    status: 'Delivered',
  },
  {
    id: '#719261',
    img: <img src={Order1} />,
    totalQuantity: 1,
    ship: 'Lagos, Nigeria',
    orderDate: ['04-10-22', '03:45:06'],
    shipmentDate: ['04-10-22', '03:45:06'],
    status: 'Delivered',
  },
  {
    id: '#719261',
    img: <img src={Order1} />,
    totalQuantity: 1,
    ship: 'Lagos, Nigeria',
    orderDate: ['04-10-22', '03:45:06'],
    shipmentDate: ['04-10-22', '03:45:06'],
    status: 'Delivered',
  },
];

const Shipment = () => {
  return (
    <FeaturesTable
      columns={columns}
      data={data}
      title='Shipment'
      subtitle='Recent Shipments'
    />
  );
};

export default Shipment;
